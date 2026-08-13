const htmlParser = require('node-html-parser')
const fs = require('fs')
const RSS = require('rss-generator')

const fixSiteUrl = url => url.replace('../', 'https://www.orbs.com/')

async function generateRss() {

    let blogsHtmlString = fs.readFileSync('./site/blog/index.html').toString()

    let html = htmlParser.parse(blogsHtmlString)

    let blogsHtml = html.querySelector('.blog-list').querySelectorAll('li.blog-list-blog.list-item.blog-element')

    const feed = new RSS({
        title: html.querySelector('#the-orbs-project-blog').childNodes[0]._rawText,
        description: html.querySelector('#thoughts-about-the-orbs-project-open-source-blockchain-and-engineering-').childNodes[0]._rawText,
        feed_url: 'https://www.orbs.com/blog/',
        site_url: 'https://www.orbs.com/blog/',
        image_url: 'https://www.orbs.com/assets/img/blog/first-orbs-rewards-distribution-summary/bg.jpg'
    })

    for (const blogHtml of blogsHtml) {

        // Skip posts scheduled for the future. The publish_at gate is CLIENT-side
        // (assets/js/blogs/index.js), so the built HTML contains every post —
        // including ones not yet live. Without this filter the feed leaks a
        // scheduled post the moment it deploys, days before its publish time.
        //
        // The condition mirrors the client gate exactly (no publish_at -> live;
        // present but unparseable -> not live) so the feed and the listing can't
        // disagree. NOTE: this runs at BUILD time, so a post enters the feed on
        // the first build after its publish time — late, not early. Late is the
        // safe direction; early is the bug being fixed.
        const publishAt = blogHtml.attrs['data-publish-at']
        const isLive = !publishAt
            || (!isNaN(new Date(publishAt)) && Date.now() > new Date(publishAt).getTime())

        if (!isLive) {
            console.log(`rss: skipping not-yet-published post (publish_at=${publishAt})`)
            continue
        }

        const titleNode = blogHtml.querySelector('.blog-list-blog-title').childNodes[0]

        const author = blogHtml.querySelector('.blog-list-blog-author').querySelector('a')

        if (titleNode && author) {

            const imageUrl = blogHtml.attrs['data-image']
            const link = blogHtml.querySelector('a').attrs['href']
            const description = blogHtml.querySelector('.short-description-container').rawText

            try {

                const date = blogHtml.querySelector('.blog-list-blog-author').querySelectorAll('p')[1].childNodes[0].rawText

                feed.item({
                    title: titleNode.rawText,
                    url: fixSiteUrl(link),
                    enclosure: {url: fixSiteUrl(imageUrl)},
                    author: author.childNodes[0].rawText,
                    description: description,
                    date: new Date(date)
                })

            } catch (ignore) {
                // failed for some reason, probably date parsing
            }

        }

    }

    fs.writeFileSync('./site/blog/rss.xml', feed.xml({indent: true}))

}


generateRss()
