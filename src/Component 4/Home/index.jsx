import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ articles, deleteArticle}) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Article
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {articles.length > 0 ? (
                articles.map((article, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{article.title}</td>
                    <td>{article.content}</td>
                    <td>{article.author}</td>
                    <td>{article.date}</td>
                    <td>
                      <Link
                        to={`/edit/${article.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteArticle(article.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No article found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    articles: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteArticle: (id) => {
    dispatch({ type: "DELETE_ARTICLE", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);