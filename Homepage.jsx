import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <section className="hero">
        <div className="overlay">
          <h1>SHA College of Engineering and Technology</h1>
          <p>Empowering Students with Knowledge, Innovation and Excellence</p>
          <button>Apply Now</button>
        </div>
      </section>

      <section className="about">
        <h2>Welcome to SCET</h2>
        <p>
          Sha College of Engineering and Technology is committed to providing
          quality education, world-class infrastructure, experienced faculty,
          and excellent placement opportunities for aspiring engineers.
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <h3>🎓 Quality Education</h3>
          <p>Experienced faculty with practical learning.</p>
        </div>

        <div className="card">
          <h3>💻 Modern Labs</h3>
          <p>Well-equipped computer and engineering laboratories.</p>
        </div>

        <div className="card">
          <h3>📚 Library</h3>
          <p>Thousands of books, journals and digital resources.</p>
        </div>

        <div className="card">
          <h3>🏆 Placements</h3>
          <p>Excellent placement training with top recruiters.</p>
        </div>
      </section>
    </>
  );
}

export default Homepage;
