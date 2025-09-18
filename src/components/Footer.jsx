import React from 'react'

function Footer() {
  return (
  <footer className="bg-dark text-center text-white rounded mb-1">
    <div className="container p-4">
      <section className="mb-4">
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
      </section>
      <section className>
        <form action>
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <div className="col-md-5 col-12">
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example2" className="form-control" />
                <label className="form-label" htmlFor="form5Example2">Email address</label>
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="mb-4">
        <p>
         TennisWiki is an independent platform created for tennis fans and learners worldwide.
        </p>
      </section>
      <section className>
<div className="row">
  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    <h5 className="text-uppercase">Explore</h5>
    <ul className="list-unstyled mb-0">
      <li><a href="/players" className="text-white text-decoration-none">Player Profiles</a></li>
      <li><a href="/rules" className="text-white text-decoration-none">Rules & Guides</a></li>
      <li><a href="/stats" className="text-white text-decoration-none">Stats & Records</a></li>
      <li><a href="/community" className="text-white text-decoration-none">Community</a></li>
    </ul>
  </div>

  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    <h5 className="text-uppercase">Major Tournaments</h5>
    <ul className="list-unstyled mb-0">
      <li><a href="https://www.wimbledon.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Wimbledon</a></li>
      <li><a href="https://www.rolandgarros.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Roland Garros</a></li>
      <li><a href="https://www.usopen.org" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">US Open</a></li>
      <li><a href="https://ausopen.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Australian Open</a></li>
    </ul>
  </div>

  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    <h5 className="text-uppercase">Resources</h5>
    <ul className="list-unstyled mb-0">
      <li><a href="https://www.atptour.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">ATP Tour</a></li>
      <li><a href="https://www.wtatennis.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">WTA Tour</a></li>
      <li><a href="https://www.itftennis.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">ITF Tennis</a></li>
      <li><a href="https://www.tennis.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Tennis.com</a></li>
    </ul>
  </div>

  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    <h5 className="text-uppercase">Connect</h5>
    <ul className="list-unstyled mb-0">
      <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
      <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
      <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
      <li><a href="/terms" className="text-white text-decoration-none">Terms of Service</a></li>
    </ul>
  </div>
</div>

      </section>
    </div>
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  © {new Date().getFullYear()} <strong>TennisWiki</strong>. All rights reserved. | 
  <a className="text-white ms-2" href="/privacy-policy"> Privacy Policy</a> | 
  <a className="text-white ms-2" href="/terms"> Terms of Service</a> | 
  <a className="text-white ms-2" href="/about"> About Us</a>
</div>

  </footer>




  )
}

export default Footer
