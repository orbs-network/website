import React from 'react';

const WhitePapers = ({ title, items, action, _relativeURL, _ID }) => (
  <>
    <div class="container has-text-centered is-size-2">
      { title }
    </div>
    {
      items.map(item => (
        <section class="section">
          <p class="is-size-4 mb-5">{item.category}</p>
          {
            item.papers.map(paper => (
              <article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p><strong>{paper.title}</strong></p>
                    <p class="is-italic">{paper.date}</p>
                    <p class="is-size-7">{paper.description}</p>
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