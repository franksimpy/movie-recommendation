import React, { useState } from 'react';

const Register = () => {


  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="row w-100">
        <div className="col-md-6 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
              <form>
                {/* Name Input */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                
                    placeholder="Enter full name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    
                    placeholder="Enter email"
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                 
                    placeholder="Enter password"
                    required
                  />
                </div>

                {/* Confirm Password Input */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>

              {/* Already have an account? */}
              <div className="mt-3 text-center">
                <small>
                  Already have an account? <a href="/login">Login</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
