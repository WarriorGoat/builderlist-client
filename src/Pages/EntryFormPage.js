import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EntryForm.css";

const EntryFormPage = (props) => {
  const backendUrl = process.env.REACT_APP_BACKEND
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [categories, setCategories] = useState([""]);

  //instantiate navigator
  const navigate = useNavigate();

  const handleCreateEntry = async () => {
    axios
      .post(`${backendUrl}/entries/create-one`, {
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
      <h1>Create a New Entry</h1>
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
        placeholder="Entry"
        autoComplete="Off"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <label>Categories: </label>
      <textarea
        type="text"
        placeholder="Entry Categories"
        autoComplete="Off"
        onChange={(e) => {
          setCategories([e.target.value]);
        }}
      />
      <br />
      <button
        onClick={() => {
          handleCreateEntry();
        }}
      >
        Create Entry:{" "}
      </button>
    </form>
  );
};

export default EntryFormPage;