import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout";
import HomePage from "./Pages/HomePage";
import BlogFormPage from "./Pages/BlogFormPage";
import BlogListPage from "./Pages/BlogListPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import "./App.css";

// const urlEndPoint = process.env.REACT_APP_BACKEND;

function App() {
  const [userMessage, setUserMessage] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/blog-form",
          element: <BlogFormPage 
          // urlEndPoint={urlEndPoint} 
          />,
        },
        {
          // index: true,
          path: "/list",
          element: <BlogListPage 
          // urlEndPoint={urlEndPoint} 
          />,
        },
        {
          path: "/login",
          element: <LoginPage 
          // urlEndPoint={urlEndPoint}
          />,
        },
        {
          path: "/registration",
          element: <RegistrationPage 
          // urlEndPoint={urlEndPoint}
          />,
        },
      ],
    },
  ]);

  return (
    <div className="Header">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;