import React from 'react'
import data from "../img/data scince.jpg"
import data1 from "../img/data scince1.jpg"
import data2 from "../img/data scince2.jpg"

export default function Datascince() {
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
                    <h2 className>Expand your career opportunities with Data Scince</h2>
                    <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to </p>
                    <button className="btn-border fw-bold">Explore Python</button>
                </div>


                <div className="d-flex flex-row ">
                    <div className="w-auto m-2 btn-border ">
                        <img src={data} />
                        <h4>Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={data1} />
                        <h4>Python for Data Science and Machine Learning Bootcamp</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={data2} />
                        <h4>The Data Science Course: Complete Data Science Bootcamp</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={data} />
                        <h4>R Programming A-Z™: R For Data Science With Real Exercises!</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={data1} />
                        <h4>Data Science A-Z™: Hands-On Exercises & ChatGPT Bonus [2023]</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={data2} />
                        <h4>Data Manipulation in Python: Master Python, Numpy & Pandas</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={data} />
                        <h4>Machine Learning, Data Science and Generative AI with Python</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={data1} />
                        <h4>Python A-Z™: Python For Data Science With Real Exercises!</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={data2} />
                        <h4>Statistics for Data Science and Business Analysis</h4>
                    </div>
                </div>
            </div>

        </>
  )
}