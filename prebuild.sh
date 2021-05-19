# !/usr/bin/env bash
set -e

mv content/blog/*/ content/ 
cp -a content/common/ content/blog/common/ 
rm -rf content/common/
sed 's/  - /  - ..\//g' content/blog/blogs.md > changed.txt
mv changed.txt content/blog/blogs.md

mv content/jp/blog/*/ content/jp/ 
cp -a content/jp/common/ content/jp/blog/common/ 
rm -rf content/jp/common/  
sed 's/  - /  - ..\//g' content/jp/blog/blogs.md > changed.txt
mv changed.txt content/jp/blog/blogs.md

mv content/ko/blog/*/ content/ko/ 
cp -a content/ko/common/ content/ko/blog/common/ 
rm -rf content/ko/common/
sed 's/  - /  - ..\//g' content/ko/blog/blogs.md > changed.txt
mv changed.txt content/ko/blog/blogs.md


echo "Prebuild is done!"