import React from 'react'
import detailimg from '../img/detail.jpg'
import detailimg2 from '../img/detail2.png'
import detailimg3 from '../img/detail3.png'
import detailimg4 from '../img/detail4.png'

export default function detail() {
  return (
    <>
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner bg-dark">
    <div className="carousel-item active">
      <div className="w-75 bg-white m-auto mt-3 mb-3 p-3">
        <div className="d-flex">
          <div className="detail-text">
            Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.
          </div>
          <div className="detail-img">
            <img src={detailimg} alt className="detail" /><br /><br />
            <strong>Jim Hemgen</strong>
            <p>Principal</p>
          </div>
        </div>
        <div className="d-flex">
          <p className="w-65"><a href="#">Read full story</a></p>
          <p className="fs-6 w-30 text-center">Booz Allen Hamilton</p>
        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className="w-75 bg-white m-auto mt-3 mb-3 p-3">
        <div className="d-flex">
          <div className="detail-text">
            With Udemy Business employees were able to marry the two together, technology and consultant soft skills. We're thankful that once they got in and took their key IT courses on AWS, Azure, Google Cloud, Big Data, and DevOps that they efficiently moved over to Consulting courses to help drive their career forward.
          </div>
          <div className="detail-img">
            <img src={detailimg2} alt className="detail" /><br /><br />
            <strong>Ian Stevens</strong>
            <p>Global Head of Capability Development
              North America</p>
          </div>
        </div>
        <div className="d-flex">
          <p className="w-65"><a href="#">Read full story</a></p>
          <p className="fs-6 w-30 text-center">Publicis Sapient</p>
        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className="w-75 bg-white m-auto mt-3 mb-3 p-3">
        <div className="d-flex">
          <div className="detail-text">
            To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.
          </div>
          <div className="detail-img text-center">
            <img src={detailimg3} alt className="detail" /><br /><br />
            <strong>Ismaeel Ameen</strong>
            <p>Head of Data Engineering
              Development and Data Management</p>
          </div>
        </div>
        <div className="d-flex">
          <p className="w-65"><a href="#">Read full story</a></p>
          <p className="fs-6 w-30 text-center">Robert Walters</p>
        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className="w-75 bg-white m-auto mt-3 mb-3 p-3">
        <div className="d-flex">
          <div className="detail-text">
            Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering fresh, relevant, personalized on-demand learning content powered by a dynamic content marketplace. 
          </div>
          <div className="detail-img">
            <img src={detailimg4} alt className="detail" /><br /><br />
            <strong>Karen Hunter</strong>
            <p>America's Team Lead
              Learning &amp; Development</p>
          </div>
        </div>
        <div className="d-flex">
          <p className="w-65"><a href="#">Read full story</a></p>
          <p className="fs-6 w-30 text-center">Steelcase</p>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}
