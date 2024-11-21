import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ShowStudents from "./ShowStudents";
import Dashboard from "./Dashboard";
import StudentAttendance from "./StudentAttendance";
import ParentInteraction from "./ParentInteraction";
import LiveClass from "./LiveClass";
import ExtraCurricular from "./ExtraCurricular";
import Report from "./Report";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/students">Show Students</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/students" element={<ShowStudents />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/studentAttendance" element={<StudentAttendance />} />
          <Route path="/parent-interaction" element={<ParentInteraction />} />
          <Route path="/root" element={<root />} />
          <Route path="/live-classes" element={<LiveClass />} />
          <Route path="/extra-curricular" element={<ExtraCurricular />} />
          <Route path="/reports" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
