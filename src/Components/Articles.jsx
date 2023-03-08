import React from "react";



const Articles = (props) => (

  <div className=" flex-wrap gap-1 m-0">
   
    {props.articles.length > 0 ? (
      props.articles.map((article) => (
        <div
          key={article.id}
          className="card alert border shadow d-flex justify-content-between">
          <div>
            <h4>{article.title}</h4>
            <p className="mb-2">{article.content}</p>
            <p className="mb-0">author: {article.author}</p>
            <i>
              <u>{article.date}</u>
            </i>
          </div>
          <span className="mt-3">
            <button
              onClick={() => {
                props.editRow(article);
              }}
              className="btn btn-warning "
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteArticle(article.id)}
              className="btn btn-danger m-1"
            >
              Delete
            </button>
          </span>
        </div>
      ))
    ) : (
      <div className="alert alert-secondary">No articles</div>
    )}
  </div>
);

export default Articles;

