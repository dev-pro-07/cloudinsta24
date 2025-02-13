import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch employee records from the Flask API
    axios
      .get("https://cloudinsta24backend.onrender.com/api/employeesfetch") // Replace with your API endpoint if necessary
      .then((response) => {
        setEmployees(response.data); // Set employee data to state
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError("Error fetching employee data");
        setLoading(false);
      });
  }, []);

  const handleImageError = (e, employeeId) => {
    // Set the default image URL if the image fails to load
    e.target.onerror = null;
    e.target.src = `https://people.zoho.com/cloudi/viewPhoto?erecno=${employeeId}&mode=1&avatarid=35`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.EmployeeID}>
              <td>{employee.EmployeeID}</td>
              <td>{employee.FirstName}</td>
              <td>{employee.LastName}</td>
              <td>{employee.EmailID}</td>
              <td>
                {/* Conditionally render the image */}
                <div className="flex-shrink-0">
                  {/* Check if Photo_downloadUrl exists */}
                  <img
                    src={
                      employee.PhotoURL ||
                      employee.Photo_downloadUrl ||
                      "default.jpg"
                    }
                    alt={employee.FirstName}
                    className="w-16 h-16 rounded-full object-cover"
                    onError={(e) => handleImageError(e, employee.EmployeeID)} // Set fallback image on error
                    width="50"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
