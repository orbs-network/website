import React from "react";
import Loader from "../shared/loader";

const NewsSubscribe = (props) => {
    const { placeholder,
        emptyError,
        validationError, _body, submit } =
        props;

    return (
        <div className="news-subscribe">
            <div className="news-subscribe-title">{_body}</div>
            <div className="news-subscribe-right">
                <input
                    placeholder={placeholder}
                    className="news-subscribe-input"
                />

                <button className="news-subscribe-submit"><Loader />{submit}</button>
                <p className="news-subscribe-error news-subscribe-empty">
                    {emptyError}
                </p>
                <p className="news-subscribe-error news-subscribe-invalid">
                    {validationError}
                </p>
            </div>
        </div>
    );
};

export default NewsSubscribe;
