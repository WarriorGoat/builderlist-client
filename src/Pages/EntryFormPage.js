import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogForm.css";

const BlogFormPage = (props) => {
  const backendUrl = process.env.REACT_APP_BACKEND
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [categories, setCategories] = useState([""]);

  //instantiate navigator
  const navigate = useNavigate();

  const handleCreateBlog = async () => {
    axios
      .post(`${backendUrl}/blogs/create-one`, {
        title: title,
        author: author,
        text: text,
        categories: categories,
      })
      .then(function () {
        navigate("/list");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form>
      <h1>Create a New Blog</h1>
      <label>Title: </label>
      <input
        type="text"
        placeholder="Enter Title"
        autoComplete="Off"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label>Author: </label>
      <input
        type="text"
        placeholder="Author's Name"
        autoComplete="Off"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <br />
      <label>Text: </label>
      <textarea
        type="text"
        placeholder="Blog Entry"
        autoComplete="Off"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <label>Categories: </label>
      <textarea
        type="text"
        placeholder="Blog Categories"
        autoComplete="Off"
        onChange={(e) => {
          setCategories([e.target.value]);
        }}
      />
      <br />
      <button
        onClick={() => {
          handleCreateBlog();
        }}
      >
        Create Blog:{" "}
      </button>
    </form>
  );
};

export default BlogFormPage;