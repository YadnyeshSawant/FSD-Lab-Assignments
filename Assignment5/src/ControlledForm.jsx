import React, { useState } from 'react';

function ControlledForm() {
  // State for all form fields (controlled component)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'Full Stack Development',
    comments: ''
  });

  // Generic handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Reset form handler
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      course: 'Full Stack Development',
      comments: ''
    });
  };

  return (
    <div className="form-wrapper">
      {/* 1. Controlled Input Form */}
      <form className="form-card" onSubmit={(e) => e.preventDefault()}>
        <h2>User Information Form</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course / Department</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments / Feedback</label>
          <textarea
            id="comments"
            name="comments"
            rows="3"
            placeholder="Type your message here..."
            value={formData.comments}
            onChange={handleChange}
          />
        </div>

        <button type="button" className="btn-reset" onClick={handleReset}>
          Clear Form
        </button>
      </form>

      {/* 2. Real-Time Display Below the Form */}
      <div className="preview-card">
        <h2>Real-Time Live Display</h2>
        <div className="preview-item">
          <strong>Full Name:</strong>
          <span>{formData.name ? formData.name : '(Waiting for input...)'}</span>
        </div>
        <div className="preview-item">
          <strong>Email Address:</strong>
          <span>{formData.email ? formData.email : '(Waiting for input...)'}</span>
        </div>
        <div className="preview-item">
          <strong>Course:</strong>
          <span>{formData.course}</span>
        </div>
        <div className="preview-item">
          <strong>Comments:</strong>
          <span>{formData.comments ? formData.comments : '(Waiting for input...)'}</span>
        </div>
      </div>
    </div>
  );
}

export default ControlledForm;
