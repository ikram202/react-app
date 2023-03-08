import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const EditArticle = ({ articles, updateArticle }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentArticle = articles.find(
    (article) => article.id === parseInt(id)
  );

  useEffect(() => {
    setTitle(currentArticle.title);
    setContent(currentArticle.content);
    setAuthor(currentArticle.author);
    setDate(currentArticle.date);
  }, [currentArticle]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkArticleTitleExists = articles.filter((article) =>
      article.title === title && article.id !== currentArticle.id
        ? article
        : null
    );
    const checkArticleContentExists = articles.filter((article) =>
      article.content === content && article.id !== currentArticle.id
        ? article
        : null
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
      id: currentArticle.id,
      title,
      content,
      author,
      date,
    };

    updateArticle(data);
    toast.success("Article updated successfully!!");
    navigate.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => navigate.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentArticle ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={title}
                  placeholder={"Title"}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  value={content}
                  placeholder={"Content"}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={author}
                  placeholder={"Author"}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <input
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Article
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Article Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateArticle: (data) => {
    dispatch({ type: "UPDATE_ARTICLE", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
