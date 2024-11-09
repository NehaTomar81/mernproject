import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import Myapi from '../shares/Myapi';
import { MdEmail } from "react-icons/md";
function Myloginpage() {
    // State to hold form data
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
 
const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
        try {
            // Send POST request to login API endpoint
            const resdata = await fetch(`${Myapi}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            const data = await resdata.json();
            if(resdata.status===220) {
                alert('Login successful');
                // Redirect or do further actions on successful login
            } else {
                // Handle errors from API response
                alert(`Login failed: ${data.message}`);
            }
            if(resdata.status===620)
                {
                    alert("user not found");
                }
    
                if(resdata.status===421)
                    {
                        alert("email and password don't match");
                    }
        } 
        catch (error) 
        {
            console.error('Error:', error);
            alert('An error occurred during login');
        }
    }
};

    
 

    return (
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
            <Link to='register' className='btn btn-success '>Register</Link>
            <Link to='dashboard' className='btn btn-dark m-2'>Dashboard</Link>
        </div>
    );
}

export default Myloginpage;















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function LoginForm() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const [loginSuccess, setLoginSuccess] = useState(null); // Track success/failure

//     // Handle input changes and update formData state
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     // Validate the form data
//     const validate = () => {
//         let formErrors = {};
//         let isValid = true;

//         if (!formData.email.trim()) {
//             formErrors.email = 'Email is required';
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             formErrors.email = 'Invalid email address';
//             isValid = false;
//         }

//         if (!formData.password.trim()) {
//             formErrors.password = 'Password is required';
//             isValid = false;
//         } else if (formData.password.length < 6) {
//             formErrors.password = 'Password must be at least 6 characters';
//             isValid = false;
//         }

//         setErrors(formErrors);
//         return isValid;
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (validate()) {
//             setIsLoading(true);
//             try {
//                 // Replace 'http://localhost:5000/api/login' with your API endpoint
//                 const response = await fetch('http://localhost:3000/login', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(formData)
//                 });

//                 const data = await response.json();

//                 if (response.ok) {
//                     setLoginSuccess(true);
//                     alert('Login successful');
//                 } else {
//                     setLoginSuccess(false);
//                     alert(`Login failed: ${data.message}`);
//                 }
//             } catch (error) {
//                 setLoginSuccess(false);
//                 console.error('Error:', error);
//                 alert('An error occurred during login');
//             } finally {
//                 setIsLoading(false);
//             }
//         }
//     };

//     return (
//         <div className="container mt-5 w-50 p-4 shadow bg-light">
//             <h2 className="text-center mb-4">Login Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                         value={formData.email}
//                         onChange={handleInputChange}
//                     />
//                     {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                         value={formData.password}
//                         onChange={handleInputChange}
//                     />
//                     {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                 </div>

//                 <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
//                     {isLoading ? 'Logging in...' : 'Login'}
//                 </button>
//                 <div className="text-center mt-3">
//                     <Link to="/register" className="text-decoration-none">Don't have an account? Register</Link>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;






