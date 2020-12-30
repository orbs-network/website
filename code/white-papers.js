import React from 'react';

const WhitePapers = ({ title, items, action, _relativeURL, _ID }) => (
  <>
    <div className="container has-text-centered is-size-2">
      { title }
    </div>
    {
      items.map((item, i) => (
        <section className="section" key={`white-papers-section-${i}`}>
          <p className="is-size-4 mb-5">{item.category}</p>
          {
            item.papers.map((paper, j) => (
              <article className="media" key={`white-papers-article-${i}-${j}`}>
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p><strong>{paper.title}</strong></p>
                    <p className="is-italic">{paper.date}</p>
                    <p className="is-size-7">{paper.description}</p>
                    <a href={_relativeURL(paper.link, _ID)}>{action}</a>
                  </div>
                </div>
              </article>
            ))
          }
        </section>
      ))
    }
  </>
);

export default WhitePapers;