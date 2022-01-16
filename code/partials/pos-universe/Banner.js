import React from 'react'
import { images } from '../../../assets/js/images';
import { handleUrl } from '../../util/link';

function Banner({ _relativeURL, _ID, _body, logo, btnText, url }) {
    const generateUrl = (url) => {
        return handleUrl(url, _relativeURL, _ID);
    };
    return (
        <div className='pos-banner'>

            <img src={generateUrl(images.pos.banner)} className='pos-banner-bg' />
            <div className='pos-banner-flex'>
                <div className='pos-banner-flex-left'>
                    <img src={generateUrl(logo)} alt='logo' className='pos-banner-logo' />
                    <section className='pos-banner-body'>
                        {_body}
                    </section>
                </div>
                <a className='pos-banner-link' href={url} target='_blank'>{btnText}</a>
            </div>
        </div>
    )
}

export default Banner
