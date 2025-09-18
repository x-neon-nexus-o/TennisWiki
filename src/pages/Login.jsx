import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '2rem',backgroundColor: '#ebfde3ff'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block p-3  ">
              <img src="src/assets/LoginPage.png" alt="login form" className="img-fluid" style={{borderRadius: '1rem 1rem 1rem 1rem',height: '600px',objectFit: 'cover'}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="d-flex align-items-center mb-3 pb-1 align-items-center justify-content-center">
                    <img src="src/assets/image.svg" className="me-3" style={{width: '200px',height: '80px'}} />
                  </div>
                  <h5 className="fw-normal mb-3 pb-3 ms-1 text-center" style={{letterSpacing: 1}}>Sign into your account</h5>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label ms-2" htmlFor="form2Example17">Email address</label>
                    <input type="email" id="form2Example17" className="form-control form-control-lg rounded-pill" placeholder='Enter your email address' />
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label ms-2" htmlFor="form2Example27">Password</label>
                    <input type="password" id="form2Example27" className="form-control form-control-lg rounded-pill" placeholder='Enter your password' />
                  </div>
                   <a className="small text-muted text-center" href="#!">Forgot password?</a>
                  <div className="pt-1 mb-4 text-center">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <div className="d-flex flex-column align-items-center justify-content-center">
                  <p className="mb-5 pb-lg-2 text-center" style={{color: '#393f81'}}>Don't have an account? <Link to="/register" style={{color: '#393f81'}}>Register here</Link></p>
                  <Link to="#!" className="small text-muted text-center">Terms of use.</Link>
                  <Link to="#!" className="small text-muted text-center">Privacy policy</Link>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Login
