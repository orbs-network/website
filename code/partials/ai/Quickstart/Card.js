import React from "react";

function QuickstartCard({ _body, icon, title, copy_text, link_url, link_text }) {
  return (
    <div className="ai-quickstart-card">
      <div className="ai-quickstart-card-header">
        <span className="ai-quickstart-card-icon" dangerouslySetInnerHTML={{ __html: icon }} />
        <h4>{title}</h4>
      </div>
      <div className="ai-quickstart-card-desc">{_body}</div>
      <div className="ai-quickstart-code">
        <code>{copy_text}</code>
        <button className="ai-quickstart-copy" data-copy={copy_text}>
          Copy
        </button>
      </div>
      {link_url && (
        <div className="ai-quickstart-card-links">
          <a href={link_url} target="_blank" className="ai-quickstart-view-link">
            {link_text}
          </a>
        </div>
      )}
    </div>
  );
}

export default QuickstartCard;
