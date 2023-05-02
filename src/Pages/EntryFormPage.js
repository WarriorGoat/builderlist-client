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
      <div>
        <h1>Create a New Entry</h1>
        <label>Company: </label>
        <input
          type="text"
          placeholder="Enter Company Name"
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
        <label>Contact First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          autoComplete="Off"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br />
        <label>Contact Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          autoComplete="Off"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br />
        <label>Contact E-Mail: </label>
        <textarea
          type="text"
          placeholder="E-Mail"
          autoComplete="Off"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br />
      </div>
      <div>
        <p>Company Address</p>
          <label>Street Number: </label>
          <input
            type="text"
            placeholder="Number"
            autoComplete="Off"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <label>Street Name: </label>
          <input
            type="text"
            placeholder="Street"
            autoComplete="Off"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <label>City: </label>
          <input
            type="text"
            placeholder="City"
            autoComplete="Off"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <label>State: </label>
          <select name="stateList" id="stateList" required="required" 
          // onchange="createStationList()"
          >
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AR">AR</option>
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DC">DC</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="GU">GU</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="PR">PR</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VI">VI</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>
            <option value="WV">WV</option>
            <option value="WY">WY</option>
              </select>
          <label>Zip Code: </label>
          <input
            type="text"
            placeholder="zip"
            autoComplete="Off"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        <br />
        <label>Company Website: </label>
        <textarea
          type="text"
          placeholder="https://..."
          autoComplete="Off"
          onChange={(e) => {
            setCategories([e.target.value]);
          }}
        />
        <br />
        </div>
      <div>
        <p>License Info</p>
          <label>State: </label>
          <select name="stateList" id="stateList" required="required" 
          // onchange="createStationList()"
          >
              </select>
          <label>License Number: </label>
          <input
            type="text"
            placeholder="Number"
            autoComplete="Off"
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>License Category: </label>
          <input
            type="text"
            placeholder="A, B, C, etc..."
            autoComplete="Off"
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
        <br />
      </div>
      <div>
        <p>Work Specialties - Fill as many as you would like</p>
          <label>Type 1: </label>
          <input
            type="text"
            placeholder="Type 1"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 2: </label>
          <input
            type="text"
            placeholder="Type 2"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 3: </label>
          <input
            type="text"
            placeholder="Type 3"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 4: </label>
          <input
            type="text"
            placeholder="Type 4"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 5: </label>
          <input
            type="text"
            placeholder="Type 5"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 6: </label>
          <input
            type="text"
            placeholder="Type 6"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 7: </label>
          <input
            type="text"
            placeholder="Type 7"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 8: </label>
          <input
            type="text"
            placeholder="Type 8"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 9: </label>
          <input
            type="text"
            placeholder="Type 9"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
          <label>Type 10: </label>
          <input
            type="text"
            placeholder="Type 10"
            autoComplete="Off"
            default = " "
            onChange={(e) => {
              setCategories([e.target.value]);
            }}
          />
        <br />
      </div>
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