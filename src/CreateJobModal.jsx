import React, { useState } from "react";
import "./CreateJobModal.css";

const CreateJobModal = ({ onClose, onPublish }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "Chennai",
    jobType: "FullTime",
    salaryMin: "",
    salaryMax: "",
    deadline: "",
    description: "",
    experience: "", // include this field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePublish = () => {
    if (typeof onPublish === "function") {
      onPublish(formData);
      onClose();
    } else {
      console.error("onPublish is not a function");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Create Job Opening</h2>

        <div className="modal-grid">
          <div className="form-group">
            <label>Job Title</label>
            <input name="title" type="text" placeholder="" value={formData.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input name="company" type="text" value={formData.company} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Location</label>
            <select name="location" value={formData.location} onChange={handleChange}>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </div>
          <div className="form-group">
            <label>Job Type</label>
            <select name="jobType" value={formData.jobType} onChange={handleChange}>
              <option>FullTime</option>
              <option>PartTime</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        <div className="modal-grid">
          <div className="form-group">
            <label>Salary Range</label>
            <div className="salary-range" style={{ display: 'flex', gap: '10px' }}>
              <input name="salaryMin" type="text" placeholder="₹ 0" value={formData.salaryMin} onChange={handleChange} />
              <input name="salaryMax" type="text" placeholder="₹ 12,00,000" value={formData.salaryMax} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Application Deadline</label>
            <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Job Description</label>
          <textarea name="description" placeholder="Enter job description" value={formData.description} onChange={handleChange}></textarea>
        </div>

        <div className="modal-actions">
          <button className="save-btn">Save Draft ⌄</button>
          <button className="publish-btn" onClick={handlePublish}>Publish ⏵</button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;
