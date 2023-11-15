import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demographic from "./pages/Demographic";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Demographic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
