import React from 'react'
import python from "../img/python.jpg"
import python1 from "../img/python1.jpg"
import python2 from "../img/python data scince.jpg"



// export default function Python()
export const Python = () => {
    return (
        <>
            <div className='d-flex flex-row '>
                <div className='me-5 mb-2  ms-5 ps-3 '><button className='bt-border'>python</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>Excel</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>Web Development</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>Data Scince</button></div>
                <div className='me-5 mb-2 '><button className='bt-border'>Amazon aws</button></div>
            </div>
            <div className="container-fluid react-border ">
                <div>
                    <h2 className>Expand your career opportunities with Python</h2>
                    <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to </p>
                    <button className="btn-border fw-bold">Explore Python</button>
                </div>


                <div className="d-flex flex-row ">
                    <div className="w-auto m-2 btn-border ">
                        <img src={python} />
                        <h4>The Complete Python Bootcamp From Zero to Hero in Python</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={python1} />
                        <h4>Automate the Boring Stuff with Python Programming</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={python2} />
                        <h4>100 Days of Code: The Complete Python Pro Bootcamp for 2023</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={python} />
                        <h4>Machine Learning A-Z™: AI, Python &amp; R + ChatGPT Bonus [2023]</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={python1} />
                        <h4>Python for Data Science and Machine Learning Bootcamp</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={python2} />
                        <h4>Learn Python Programming Masterclass</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={python} />
                        <h4>Machine Learning A-Z™: AI, Python &amp; R + ChatGPT Bonus [2023]</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={python1} />
                        <h4>Python for Data Science and Machine Learning Bootcamp</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={python2} />
                        <h4>Learn Python Programming Masterclass</h4>
                    </div>
                </div>
            </div>

        </>
    )
}
