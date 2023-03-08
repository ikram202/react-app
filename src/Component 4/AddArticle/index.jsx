import React, { useState } from "react";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPost = ({ articles, addArticle }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkArticleTitleExists = articles.filter((article) =>
      article.title === title ? article : null
    );
    const checkArticleContentExists = articles.filter((article) =>
      article.content === content ? article: null
    );

    if (!author|| !title|| !content) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkArticleTitleExists.length > 0) {
      return toast.error("This title already exists!!");
    }
    if (checkArticleContentExists.length > 0) {
      return toast.error("This content  already exists!!");
    }

    const data = {
      id: articles.length > 0 ? articles[articles.length - 1].id + 1 : 0,
      title,
      content,
      author,
      date,
    };

    addArticle(data);
    toast.success("Article added successfully!!");
    navigate.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Article</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Author's name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Article"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state,
});
const mapDispatchToProps = (dispatch) => ({
  addArticle: (data) => {
    dispatch({ type: "ADD_ARTICLE", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);