import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>
                <form>
                  {/* Email Input */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
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
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    Log In
                  </button>
                </form>
                <div className="mt-3 text-center">
                  <small>Don't have an account? <Link to='/signup'>Sign up</Link></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
