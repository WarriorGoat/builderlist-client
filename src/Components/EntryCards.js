import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EntryCards.css";
import axios from "axios";

// Blog Card
const EntryCards = (props) => {
  const [entryList, setEntryList] = useState(props);

  const navigate = useNavigate();

  const DeleteCard = (props) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/entries/deleteOne/${props}`)
      .then(function (response) {
        axios
          .get(`${process.env.REACT_APP_BACKEND}/entries/all`)
          .then(function (res) {
            setEntryList(res.data.entries);
            navigate("/list");
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const entryCard = (props) => {
    const entry = props.entry;
    return (
      <div className="card-body" key={entry.id}>
        <h2 className="card-title text-center">
          <b>Title: {entry.title}</b>
        </h2>
        <ul className="list-group list-group-flush text-left">
          <li className="list-group-item">
            <b>Author:</b> {entry.author}
          </li>
          <li className="list-group-item">
            <b>ID:</b> {entry.id}
          </li>
          <li className="list-group-item">
            <b>Text:</b> {entry.text}
          </li>
          <li className="list-group-item">
            <b>Categories:</b> {entry.categories.join(", ")}
          </li>
          <li className="list-group-item">
            <b>Creation Date:</b> {entry.createdAt}
          </li>
          <li className="list-group-item">
            <b>Last Updated:</b> {entry.updatedAt}
          </li>
          <button
            className="deleteCard"
            onClick={() => {
              DeleteCard(entry.id);
            }}
          >
            Delete Entry
          </button>
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className="card">{entryCard(props)}</div>
    </>
  );
};

export default EntryCards;