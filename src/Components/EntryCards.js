import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCards.css";
import axios from "axios";

// Blog Card
const BlogCards = (props) => {
  const [blogList, setBlogList] = useState(props);

  const navigate = useNavigate();

  const DeleteCard = (props) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/blogs/deleteOne/${props}`)
      .then(function (response) {
        axios
          .get(`${process.env.REACT_APP_BACKEND}/blogs/all`)
          .then(function (res) {
            setBlogList(res.data.blogs);
            navigate("/list");
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const blogCard = (props) => {
    const blog = props.blog;
    return (
      <div className="card-body" key={blog.id}>
        <h2 className="card-title text-center">
          <b>Title: {blog.title}</b>
        </h2>
        <ul className="list-group list-group-flush text-left">
          <li className="list-group-item">
            <b>Author:</b> {blog.author}
          </li>
          <li className="list-group-item">
            <b>ID:</b> {blog.id}
          </li>
          <li className="list-group-item">
            <b>Text:</b> {blog.text}
          </li>
          <li className="list-group-item">
            <b>Categories:</b> {blog.categories.join(", ")}
          </li>
          <li className="list-group-item">
            <b>Creation Date:</b> {blog.createdAt}
          </li>
          <li className="list-group-item">
            <b>Last Updated:</b> {blog.updatedAt}
          </li>
          <button
            className="deleteCard"
            onClick={() => {
              DeleteCard(blog.id);
            }}
          >
            Delete Blog
          </button>
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className="card">{blogCard(props)}</div>
    </>
  );
};

export default BlogCards;