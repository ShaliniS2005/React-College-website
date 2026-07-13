import React from "react";

const courses = [
  "Computer Science Engineering",
  "Artificial Intelligence & Data Science",
  "Information Technology",
  "Electronics & Communication",
  "Electrical & Electronics",
  "Mechanical Engineering",
  "Civil Engineering"
];

function Coursespage() {
  return (
    <div style={{ padding: "40px", background: "#eef5ff", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Courses Offered
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
            }}
          >
            <h3>{course}</h3>
            <p>Duration : 4 Years</p>
            <p>Degree : B.E / B.Tech</p>

            <button
              style={{
                background: "#003366",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px"
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coursespage;
