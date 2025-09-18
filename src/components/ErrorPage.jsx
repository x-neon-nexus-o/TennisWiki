import React from 'react'

function ErrorPage() {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1 className='display-1'>404</h1>
          <h2 className='mb-4'>Page Not Found</h2>
          <p className='lead'>Sorry, the page you are looking for does not exist.</p>
          <a href="/" className='btn btn-primary mt-3'>Go to Home</a>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
