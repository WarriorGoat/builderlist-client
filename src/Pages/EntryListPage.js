import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCards from "../Components/BlogCards";

const BlogListPage = (props) => {
  const [blogList, setBlogList] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND
  //load the blog items from the back end

  const pullData = async () => {
    axios
      .get(`${backendUrl}/blogs/all`)
      .then((res) => {
        setBlogList(res.data.blogs);
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
    <div className="BlogListPage container">
      <h2 className="display-4 text-center">Here is your List of Blogs</h2>
      <div className="card-group">
        {blogList.map((blog, index) => (
          <BlogCards blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;