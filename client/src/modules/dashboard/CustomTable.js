// import React from 'react'
import React, { Fragment, useState } from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
export default function CustomTable() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: ''
});

// State to hold validation errors
const [errors, setErrors] = useState({});

// Handle input changes and update formData state
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

// Validate the form
const validate = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
        formErrors.name = 'Name is required';
        isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
        formErrors.password = 'Password is required';
        isValid = false;
    } else if (formData.password.length < 6) {
        formErrors.password = 'Password must be at least 6 characters';
        isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
        formErrors.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formErrors.email = 'Email address is invalid';
        isValid = false;
    }

    setErrors(formErrors);
    return isValid;
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    // alert('Your LoginForm submitted successfully!');
    if (validate()) {
        // Proceed with form submission (e.g., send data to API)
        console.log('Form submitted', formData);

        
    }
};

  return (
    <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow img " >
      <div className="container-fluid">
        <a className="navbar-brand text-white texts" href="#">DASHBOARD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4 position-sticky" style={{ top: '0'}} id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nt">
            <li className="nav-item">
              <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='register' className='nav-link text-white '>Register</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link text-white" href="#">Login</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    
    <div className='container bg-info rounded shadow w-50'>
    <div className='col mt-4'>
        <h1 className='text-center'>Login Form</h1>
        <div className='mb-3'>
            <label className="form-label"> Name</label>
            <input
                type="text"
                className='form-control'
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
    </div>
    <div className='col'>
        <div className='mb-3'>
        <FaLock /> <label className="form-label">Password</label>
            <input
                type="password"
                className='form-control'
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
    </div>
    <div className='col'>
        <div className='mb-3'>
        <MdEmail /> <label className="form-label">Email</label>
            <input
                type="email"
                className='form-control'
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
    </div>
    <button type="submit" className="btn btn-danger m-2" onClick={handleSubmit}>
        LOGIN
    </button>
   
    
</div>
</Fragment>
  )
}
