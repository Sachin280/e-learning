import React from 'react'
import banner1 from "../img/banner.png"
import banner2 from "../img/banner2.jpg"
import w from "../img/w.svg"
import att from "../img/att.svg"
import cisco from "../img/cisco.svg"
import citi from "../img/citi.svg"
import ericsson from "../img/ericsson.svg"
import hewlett from "../img/hewlett_packard_enterprise.svg"
import procter from "../img/procter_gamble.svg"
import samsung from "../img/samsung.svg"


export default function Banner() {
  return (
    <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-inner mt-3 mb-4 ">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src={banner1} className="d-block w-100" alt="..." />
      {/* carousel-caption d-none d-md-block */}
      <div className="banner shadow-lg ">
        <h1>Subscribe to the best of Udemy</h1>
        <p>With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, design, and more.</p>
        <button className="btn btn-secondary ">Learn more</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src={banner2} className="d-block w-100" alt="..." />
      {/* carousel-caption d-none d-md-block */}
      <div className="banner shadow-lg ">
        <h1>Jump into learning for less</h1>
        <p>If you’re new to Udemy, we’ve got good news: For a limited time, courses start at just ₹449 for new learners! Shop now.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container-fluid">
  <div className="banner2 m-auto pt-4 pb-3  mt-2 mb-2 ">
    <div className="text-center fs-5">Trusted by over 14,400 companies and millions of learners around the world
    </div>
    <div className="d-flex flex-row justify-content-around  ">
      <img src={w} alt='' />
      <img src={samsung} alt='' />
      <img src={cisco} alt='' />
      <img src={att} alt='' />
      <img src={procter} alt='' />
      <img src={hewlett} alt='' />
      <img src={citi} alt='' />
      <img src={ericsson} alt='' />
    </div>
  </div>
</div>
<div className='container-fluid ps-5 ms-4 mt-5 '>
    <h2>A broad selection of courses</h2>
    <p>Choose from over 210,000 online video courses with new additions published every month</p>
</div>

    </>


  )
}
