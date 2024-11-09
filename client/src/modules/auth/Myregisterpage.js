import './reg.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
// import Myapi from '../shares/Myapi';
import { FaPhoneAlt, FaBook, FaLock } from "react-icons/fa";
import { LiaCitySolid } from "react-icons/lia";

function Myregisterpage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    city: '',
    course: '',
    phone: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!form.firstName) formErrors.firstName = 'First name is required';
    if (!form.lastName) formErrors.lastName = 'Last name is required';
    if (!form.dob) formErrors.dob = 'Date of birth is required';
    if (!form.city) formErrors.city = 'City is required';
    if (!form.course) formErrors.course = 'Course is required';
    if (!form.password) formErrors.password = "Password is required";
    if (form.password && form.password.length < 6) formErrors.password = "Password must be at least 6 characters";
    if (!form.phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(form.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    }
    if (!form.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = 'Email address is invalid';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(`http://localhost:7000/register`, { // Replace with your API URL
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form)
        });
        if (response.ok) {
          alert('Form submitted successfully!');
          // Reset form fields after submission
          setForm({
            firstName: '',
            lastName: '',
            dob: '',
            city: '',
            course: '',
            phone: '',
            email: '',
            password: ''
          });
        } else {
          alert('Failed to submit form');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-5 bg-info nt">
      <h2 className="text-center p-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields and validation feedback */}
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>
        <div className="mb-3">
          <FaLock /> <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
          {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
        </div>
        <div className="mb-3">
          <LiaCitySolid /> <label className="form-label">City</label>
          <select
            type="text"
            className={`form-select  ${errors.city ? 'is-invaild' : ''}`}
            name="city"
            value={form.city}
            onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Moradabad">Moradabad</option>
            <option value="Khushalpur">Khushalpur</option>
            <option value="Amroha">Amroha</option>
            <option value="Rampur">Rampur</option>
            <option value="Noida">Noida</option>
          </select>
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>
        <div className="mb-3">
          <FaBook /> <label className="form-group">Course</label>
          <select
            className={`form-select  ${errors.course ? 'is-invalid' : ''}`}
            name="course"
            value={form.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="mern">MERN</option>
            <option value="mean">MEAN</option>
            <option value="java">Java</option>
          </select>
          {errors.course && <p className="invalid-feedback">{errors.course}</p>}
        </div>


        <div className="mb-3">
          <FaPhoneAlt /> <label className="form-label">Phone</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <div className="mb-3">
          <MdEmail /> <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className='mb-3'>
          <button type="submit" className="btn btn-danger m-2 ">Register</button>
          <Link to='/' className='btn btn-success'>LOGIN</Link>
        </div>
      </form>
    </div>
  );
}

export default Myregisterpage;
