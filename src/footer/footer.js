import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="container-fluid fs-5 bg-dark mt-2 text-white ">
        <div className='pt-4 d-flex flex-row justify-content-around pb-2 '>
          <div>
            this is the time to learn coding to make atteractive website design and backend technology,digital marketing etc.
          </div>
          <div>
            <button className='btn btn-info'>Tech in Udemy</button>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row justify-content-around  ">
          <div className="ms-5 list-unstyled">
            <h5 className=''>front end webdesign course list</h5>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>Ajax</li>
            <li>React</li>
          </div>
          <div className="list-unstyled">
            <h5>Backend technology</h5>
            <li>PHP</li>
            <li>Java</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Ruby</li>
            <li>Flask</li>
          </div>
          <div className="list-unstyled">
            <li>Digital Marketing</li>
            <li>Social Media Marketing.</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Account Based Marketing (ABM)</li>
            <li>Paid Advertising.</li>
            <li>Content Marketing.</li>
            <li>Email Marketing.</li>
            <li>Podcasting.</li>
            <li>Influencer Marketing..</li>
          </div>

        </div>
      </div>
    </>
  )
}