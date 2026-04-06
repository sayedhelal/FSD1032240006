import React, { useState } from "react";
import "./App.css";
import html2pdf from "html2pdf.js";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    skills: "",
    experience: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const downloadPDF = () => {
    const element = document.getElementById("resume");

    const opt = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="container">
      <h1>🚀 Resume Builder</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />

          <textarea name="summary" placeholder="Professional Summary" onChange={handleChange}></textarea>
          <textarea name="education" placeholder="Education" onChange={handleChange}></textarea>
          <textarea name="skills" placeholder="Skills (comma separated)" onChange={handleChange}></textarea>
          <textarea name="experience" placeholder="Experience / Internships" onChange={handleChange}></textarea>

          <button type="submit">Generate Resume</button>
        </form>
      ) : (
        <>
          <div className="resume template3" id="resume">

            {/* LEFT SIDE */}
            <div className="left">
              <h1>{data.name}</h1>
              <p className="title">Professional</p>

              <h3>Profile</h3>
              <p>{data.summary}</p>

              <h3>Employment History</h3>
              <p>{data.experience}</p>

              <h3>Education</h3>
              <p>{data.education}</p>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="right">
              <h3>Details</h3>
              <p>{data.email}</p>
              <p>{data.phone}</p>

              <h3>Skills</h3>
              {data.skills.split(",").map((skill, index) => (
                <div key={index} className="skill">
                  <span>{skill}</span>
                  <div className="bar">
                    <div className="fill"></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* BUTTONS */}
          <button onClick={downloadPDF}>Download Resume</button>
          <button onClick={() => setSubmitted(false)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default App;