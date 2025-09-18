import React from 'react'

function Products(props) {
  return (
      <div className="card text-dark" style={{borderRadius: '1rem 1rem 1rem 1rem', backgroundColor: '#f0f0f0d1'}}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mt-auto">
            {props.buttonText}
          </a>
        </div>
      </div>

      
  );
}

export default Products
