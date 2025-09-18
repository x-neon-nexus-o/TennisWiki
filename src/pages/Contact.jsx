import React, { useState } from "react";

function Contact() {
  const [forms,setForms]=useState({

    name:"",
    email:"",
    mob:"",
    message:""
  })

  const [errors,setErrors]=useState({})

  const handleChange =(e) =>{
    const {name,value}=e.target;
    setForms({...forms,[name]:value});

    if(errors[name])
    {
      setErrors({...errors,[name]:""})
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!forms.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!forms.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!forms.mob.trim()) {
      newErrors.mob = "Mobile number is required";
    }

    if (!forms.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationErrors = validateForm();
    if (Object.keys(ValidationErrors).length > 0) {
      setErrors(ValidationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully");
    }
  };


  const handleClear = () =>{
    setForms({name:"",email:"",mob:"",message:""});
    setErrors({});
  }

  return (
    <div>
      <div className="container my-3">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="imgs/ContactUs.png"
              className="img-fluid img-thumbnail shadow"
            ></img>
          </div>

          
          <div className="col-md-6 mt-3">
            <div className="card p-4 shadow rounded" style={{backgroundColor: '#f0f0f0d1'}}>
            <h2 className="mb-3">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Enter Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  value={forms.name}
                  name="name"
                  onChange={handleChange}
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter name here"
                  autoComplete="off"

                />
                {errors.name &&<div className="invalid-feedback">{errors.name}</div>}
              </div>

               <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Enter Email Address
                </label>

                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={forms.email}
                  name="email"
                  onChange={handleChange}
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter valid email address"
                  autoComplete="off"
                />
                {errors.email &&<div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="mob" className="form-label">
                  Enter Mobile Number
                </label>
                <input
                  type="number"
                  className={`form-control ${errors.mob ? 'is-invalid' : ''}`}
                  value={forms.mob}
                  name="mob"
                  onChange={handleChange}
                  id="mob"
                  aria-describedby="emailHelp"
                  placeholder="Enter valid mobile number"
                  autoComplete="off"
                />
                {errors.mob &&<div className="invalid-feedback">{errors.mob}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Enter Message
                </label>
                <textarea id="message" 
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  value={forms.message}
                  name="message"
                  onChange={handleChange}
                ></textarea>
                {errors.message &&<div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary">
                Send message
              </button>

              <button type="button" className="btn btn-secondary ms-2" onClick={handleClear}>Clear</button>
            </form>
            </div>
          </div>

          </div>
        </div>
      </div>
  );
}

export default Contact;
