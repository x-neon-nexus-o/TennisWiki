import React from 'react'

function Slider() {
  return (
<div id="carouselExampleCaptions" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner rounded shadow">
    <div className="carousel-item active">
      <img src="imgs/EmmaRaducanu.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Emma Raducanu</h5>
        <p>British tennis star who made history by winning the 2021 US Open as a qualifier</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="imgs/Novak.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Novak Djokovic</h5>
        <p>Serbian legend and multiple Grand Slam champion, renowned for his dominance and resilience</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="imgs/ArynaSabalenka.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Aryna Sabalenka</h5>
        <p>Powerful Belarusian player and Grand Slam winner, known for her aggressive baseline game.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  )
}

export default Slider
