import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Album from "./components/Album";
import Artist from "./components/Artist";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Home></Home>

        <Routes>
          <Route path="/album/:id" component={Album} />
          <Route path="/artist/:id" component={Artist} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
