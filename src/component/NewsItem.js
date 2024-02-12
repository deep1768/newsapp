import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      discription,
      imageUrl,
      newsUrl,
      date,
      author,
      source,
    } = this.props;
    return (
      <div>
        <div className="card">
          <div>
            <span class="badge rounded-pill bg-danger" style={{
              display: 'flex',
              justifycontent: 'flex-end',
              position: 'absolute',
              right: 0
            }}>
              {source}

            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" style={{background: '#dfdfdf'}}>
            <h5 className="card-title">
              {title}

            </h5>
            <p className="card-text">{discription}</p>
            <p class="card-text">
              <strong>
                {" "}
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}{" "}
              </strong>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}

              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
