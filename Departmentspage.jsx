import React from "react";

const departments = [
  "Computer Science",
  "Information Technology",
  "Artificial Intelligence",
  "ECE",
  "EEE",
  "Mechanical",
  "Civil"
];

function Departmentspage() {
  return (
    <div style={{ padding: "40px", background: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Departments
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        {departments.map((dept, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
            }}
          >
            <h3>{dept}</h3>

            <p>Faculty Members : 25+</p>

            <p>Laboratories : 6</p>

            <p>Placement Support : Excellent</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departmentspage;
