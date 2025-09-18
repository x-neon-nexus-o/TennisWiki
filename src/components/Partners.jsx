import React from 'react'

function Partners() {
  return (
    <div className="text-center p-4">
      <h5 className="text-uppercase">Our Partners</h5>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <a href="https://www.wtatennis.com/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src="/src/assets/Wta_Logo_1.png" alt="Partner 1" className="img-fluid" style={{ maxWidth: '150px', verticalAlign: 'middle' }} />
        </a>
        <a href="https://www.wimbledon.com/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src="/src/assets/Wimbledon.png" alt="Partner 2" className="img-fluid" style={{ maxWidth: '150px', verticalAlign: 'middle' }} />
        </a>
        <a href="https://www.usopen.org/" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src="/src/assets/UsOpen1.png" alt="Partner 3" className="img-fluid" style={{ maxWidth: '150px', verticalAlign: 'middle' }} />
        </a>
        <a href="https://www.rolandgarros.com" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src="/src/assets/roland-garros1.png" alt="Partner 4" className="img-fluid" style={{ maxWidth: '150px', verticalAlign: 'middle' }} />
        </a>
        <a href="https://www.australianopen.com" target="_blank" rel="noopener noreferrer" className="m-4">
          <img src="/src/assets/australian-open-2.svg" alt="Partner 5" className="img-fluid" style={{ maxWidth: '150px', verticalAlign: 'middle' }} />
        </a>
      </div>
    </div>
  )
}

export default Partners
