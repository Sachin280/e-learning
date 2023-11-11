import React from 'react'
import web from "../img/web development.jpg"
import web1 from "../img/web development1.jpg"
import web2 from "../img/web development2.jpg"

export default function Webdevelopment() {
  return (
    <>
            <div className='d-flex flex-row '>
                <div className='me-5 mb-2  ms-5 ps-3 '><button className='bt-border'>python</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>Excel</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>JavaScript</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>Web Development</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>Data Scince</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>Amazon aws</button></div>
            </div>
            <div className="container-fluid react-border ">
                <div>
                    <h2 className>Expand your career opportunities with Web Development</h2>
                    <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to </p>
                    <button className="btn-border fw-bold">Explore Python</button>
                </div>


                <div className="d-flex flex-row ">
                    <div className="w-auto m-2 btn-border ">
                        <img src={web} />
                        <h4>The Complete 2023 Web Development Bootcamp</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={web1} />
                        <h4>The Web Developer Bootcamp 2023</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={web2} />
                        <h4>Web Development Masterclass - Online Certification Course</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={web} />
                        <h4>The Complete Web Developer Course 3.0</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={web1} />
                        <h4>The Complete Web Developer in 2023: Zero to Mastery</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={web2} />
                        <h4>Create a Members Only Blog using PHP, MySQL, & AJAX</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={web} />
                        <h4>Internet and Web Development Fundamentals</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={web1} />
                        <h4>The Complete 2023 PHP Full Stack Web Developer Bootcamp</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={web2} />
                        <h4>The Complete 2020 Fullstack Web Developer Course</h4>
                    </div>
                </div>
            </div>

        </>
  )
}

