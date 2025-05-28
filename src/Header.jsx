import "./Header.css";
import React, { useState } from "react";
import CreateJobModal from "./CreateJobModal";
import { ReactComponent as Logo } from './assets/logo.svg.svg'; // ✅ fixed import

const Header = ({ onPublish }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="logo"><Logo /></div>

        <nav className="nav-links">
          <a href="/home">Home</a>
          <a href="/jobs">Find Jobs</a>
          <a href="/talents">Find Talents</a>
          <a href="/about">About us</a>
          <a href="/testimonials">Testimonials</a>
        </nav>

        <button className="create-button" onClick={() => setShowModal(true)}>
          Create Job
        </button>

        {showModal && (
          <CreateJobModal
            onClose={() => setShowModal(false)}
            onPublish={onPublish}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
