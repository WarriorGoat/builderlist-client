import React, { useEffect, useState } from "react";
import axios from "axios";
import EntryCards from "../Components/EntryCards";

const EntryListPage = (props) => {
  const [entryList, setEntryList] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND
  //load the blog items from the back end

  const pullData = async () => {
    axios
      .get(`${backendUrl}/entries/all`)
      .then((res) => {
        setEntryList(res.data.entries);
      })
      .catch(function (error) {
        console.log(`Client Error Point 2: ` + error);
      });
  };
  useEffect(() => {
    pullData();
  }, []);

  // console.log(blogList)

  return (
    <div className="EntryListPage container">
      <h2>PLACE HOLDER FOR SEARCH BAR</h2>
      <h2 className="display-4 text-center">Here is your List of Entries</h2>
      <div className="card-group">
        {entryList.map((entry, index) => (
          <EntryCards entry={entry} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EntryListPage;