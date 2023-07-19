import React from "react";
import Template from "./Template";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./Navigation/CategoryPage";
import ViewNews from "./Navigation/ViewNews";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home/:id" element={<Template />} />
        <Route path="/DetailedNews" element={<ViewNews />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
