import React from 'react'
import JavaScript from "../img/javascript.png"
import JavaScript1 from "../img/javascript1.jpg"
import JavaScript2 from "../img/javascript2.png"

export default function Javascript() {
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
                    <h2 className>Expand your career opportunities with JavaScript</h2>
                    <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to </p>
                    <button className="btn-border fw-bold">Explore Python</button>
                </div>


                <div className="d-flex flex-row ">
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript} />
                        <h4>The Complete JavaScript Course 2023: From Zero to Expert!</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript1} />
                        <h4>JavaScript - Basics to Advanced step by step</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript2} />
                        <h4>CSS & JavaScript - Certification Course for Beginners</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript} />
                        <h4>JavaScript: Understanding the Weird Parts</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript1} />
                        <h4>JavaScript for Beginners - The Complete introduction to JS</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript2} />
                        <h4>JavaScript - The Complete Guide 2023 (Beginner + Advanced)</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript} />
                        <h4>Javascript For Beginners Complete Course</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript1} />
                        <h4>Modern JavaScript From The Beginning 2.0 - 2023 Revamp</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={JavaScript2} />
                        <h4>CSS, JavaScript,PHP And Python Programming All in One Course</h4>
                    </div>
                </div>
            </div>

        </>
  )
}
