SHELL := /bin/bash
CONTENT_DIR := content
SITE_DIR := site
CODE_DIR := code
ASSETS_DIR := assets
STASH_DIR := .content-stash
HASH_DIR := .build-hashes

# Global deps — changes here affect ALL pages, require full rebuild
GLOBAL_DEPS := $(CONTENT_DIR)/_shared $(CODE_DIR) $(ASSETS_DIR)/sass $(ASSETS_DIR)/js markdown.js

.PHONY: build build-incremental build-full build-sass clean restore help

help:
	@echo "make build       - Incremental build (only changed pages)"
	@echo "make build-full  - Full rebuild of all pages"
	@echo "make build-sass  - Rebuild CSS only"
	@echo "make clean       - Remove site/ and build hashes"

# Default: incremental build
build: build-incremental

# Full rebuild
build-full:
	@echo "==> Full build..."
	npm run build
	@$(MAKE) --no-print-directory save-hashes-post
	@echo "==> Done."

# Rebuild only CSS
build-sass:
	sass ./$(ASSETS_DIR)/sass/index.scss ./$(ASSETS_DIR)/css/index.css

# Incremental build
build-incremental:
	@mkdir -p $(HASH_DIR)
	sh prebuild.sh
	@if [ ! -f $(HASH_DIR)/_global ]; then \
		echo "==> First run, no cached hashes. Running full build..."; \
		cuttlebelle; \
		$(MAKE) --no-print-directory save-hashes-post; \
	else \
		GLOBAL_HASH=$$(find $(GLOBAL_DEPS) -type f 2>/dev/null | sort | xargs cat 2>/dev/null | shasum | cut -d' ' -f1); \
		OLD_GLOBAL=$$(cat $(HASH_DIR)/_global 2>/dev/null || echo ""); \
		if [ "$$GLOBAL_HASH" != "$$OLD_GLOBAL" ]; then \
			echo "==> Global files changed (code/styles/shared), full rebuild required."; \
			cuttlebelle; \
			$(MAKE) --no-print-directory save-hashes-post; \
		else \
			CONTENT_PAGES=$$(find $(CONTENT_DIR) -maxdepth 1 -mindepth 1 -type d ! -name '_shared' ! -name 'common' | sort); \
			CHANGED=""; \
			for dir in $$CONTENT_PAGES; do \
				name=$$(basename $$dir); \
				HASH=$$(find $$dir -type f 2>/dev/null | sort | xargs cat 2>/dev/null | shasum | cut -d' ' -f1); \
				OLD=$$(cat $(HASH_DIR)/$$name 2>/dev/null || echo ""); \
				if [ "$$HASH" != "$$OLD" ]; then \
					CHANGED="$$CHANGED $$name"; \
				fi; \
			done; \
			if [ -z "$$CHANGED" ]; then \
				echo "==> No changes detected. Skipping build."; \
			else \
				echo "==> Changed pages:$$CHANGED"; \
				echo "==> Stashing unchanged pages..."; \
				mkdir -p $(STASH_DIR); \
				for dir in $$CONTENT_PAGES; do \
					name=$$(basename $$dir); \
					if ! echo "$$CHANGED" | grep -qw "$$name"; then \
						mv $$dir $(STASH_DIR)/$$name; \
					fi; \
				done; \
				echo "==> Building changed pages..."; \
				cuttlebelle || { $(MAKE) --no-print-directory restore; exit 1; }; \
				$(MAKE) --no-print-directory restore; \
				$(MAKE) --no-print-directory save-hashes-post; \
			fi; \
		fi; \
	fi
	@cp 404.html $(SITE_DIR)/404.html 2>/dev/null || true
	@echo "==> Build complete."

restore:
	@if [ -d $(STASH_DIR) ]; then \
		for dir in $(STASH_DIR)/*/; do \
			[ -d "$$dir" ] && mv "$$dir" $(CONTENT_DIR)/; \
		done; \
		rmdir $(STASH_DIR) 2>/dev/null || true; \
	fi

save-hashes-post:
	@mkdir -p $(HASH_DIR)
	@find $(GLOBAL_DEPS) -type f 2>/dev/null | sort | xargs cat 2>/dev/null | shasum | cut -d' ' -f1 > $(HASH_DIR)/_global
	@for dir in $$(find $(CONTENT_DIR) -maxdepth 1 -mindepth 1 -type d ! -name '_shared' ! -name 'common' | sort); do \
		name=$$(basename $$dir); \
		find $$dir -type f 2>/dev/null | sort | xargs cat 2>/dev/null | shasum | cut -d' ' -f1 > $(HASH_DIR)/$$name; \
	done

clean:
	rm -rf $(SITE_DIR) $(HASH_DIR) $(STASH_DIR)
