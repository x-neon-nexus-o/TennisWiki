import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate =useNavigate();
  const handleLogin =()=>{
    navigate('/login');
  }

   const handleRegister =()=>{
    navigate('/register');
  }
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-1 rounded shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
     <Link className="navbar-brand" to="/">
    <img src='imgs/Logo.svg' alt='logo' style={{width: '100px', height: '40px'}} className='me-2'/>
  </Link>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* mb is used to go to the left*/}

        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/">Home</Link> {/* Changed from <a> to <Link> and href to to  */}
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" to="/About">About</Link> { /* Changed from <a> to <Link> and href to to  */ }
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/Contact" tabIndex={-1} aria-disabled="true" >Contact</Link>{/* Changed from <a> to <Link> and href to to  and active for making it dark*/}
        </li>

      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success me-1" type="button" onClick={handleLogin}>Login</button>
        <button className="btn btn-outline-primary" type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Header
