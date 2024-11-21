import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentsList() {
  const [students, setStudents] = useState([]);

  // Fetch students from the server
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []); // Empty array ensures this only runs once when the component mounts

  return (
    <div className="students-list-container">
      <h2>Registered Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone_number}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No students registered yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
