import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login.js";
import Home from "./Home.js";
import Employee from "./Employee.js";
import Department from "./Department.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/department" element={<Department />} />
      </Routes>
    </Router>
  );
}

export default App;
