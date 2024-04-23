import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegisterPage from "./components/userRegisterPage/UserRegisterPage";
import UserList from "./components/userList/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<UserRegisterPage />} />
          <Route element={<UserList />} path="/users" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
