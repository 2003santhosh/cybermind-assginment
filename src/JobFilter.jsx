import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./JobFilter.css";

const JobFilter = () => {
  const [salaryRange, setSalaryRange] = useState([50000, 100000]);

  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        {/* Search Input */}
        <div className="filter-item">
          <FaSearch className="icon-1" />
          <input type="text" placeholder="Search By Job Title, Role" />
        </div>

        <div className="divider" />

        {/* Location Dropdown */}
       
        {/* Location Dropdown */}
        <div className="filter-item">
          <FaMapMarkerAlt className="icon-2" />
          <select>
            <option value="">Preferred Location</option>
            <option value="bangalore">Bangalore</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        <div className="divider" />

        {/* Job Type Dropdown */}
        <div className="filter-item">
          <FaUserAlt className="icon-3" />
          <select>
            <option value="">Job type</option>
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
            <option value="internship">Internship</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        <div className="divider" />

        {/* Salary Range Slider */}
        <div className="filter-item slider-wrapper">
          <div className="range-label">Salary Per Month</div>
          <Slider
            range
            min={50000}
            max={100000}
            step={1000}
            value={salaryRange}
            onChange={setSalaryRange}
            trackStyle={[{ backgroundColor: 'black' }]}
            handleStyle={[
              { borderColor: 'black', backgroundColor: 'white' },
              { borderColor: 'black', backgroundColor: 'white' },
            ]}
            railStyle={{ backgroundColor: '#ddd' }}
          />
          <div className="salary-values">
            ₹{(salaryRange[0] / 1000).toFixed(0)}k – ₹{(salaryRange[1] / 1000).toFixed(0)}k
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
