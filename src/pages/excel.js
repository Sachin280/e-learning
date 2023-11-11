import React from 'react'
import excel from "../img/excel.jpg"
import excel1 from "../img/excel1.jpg"
import excel2 from "../img/excel3.jpg"

export default function Excel() {
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
                    <h2 className>Expand your career opportunities with Excel</h2>
                    <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to </p>
                    <button className="btn-border fw-bold">Explore Python</button>
                </div>


                <div className="d-flex flex-row ">
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel} />
                        <h4>Microsoft Excel - Excel from Beginner to Advanced</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel1} />
                        <h4>Zero to Hero in Microsoft Excel: Complete Excel guide 2023</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel2} />
                        <h4>Microsoft Excel Weekender Crash Course</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel} />
                        <h4>Ms Excel/Excel 2023 - The Complete Introduction to Excel</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel1} />
                        <h4>Beginner to Pro in Excel: Financial Modeling and Valuation</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel2} />
                        <h4>Microsoft Excel Beginner to Advanced w/ Data Analysis 101</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel} />
                        <h4>Microsoft Excel: Data Analysis with Excel Pivot Tables</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel1} />
                        <h4>Microsoft Excel - Ms Excel from Beginner to Advanced Course</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={excel2} />
                        <h4>Data Analytics with Excel Pivot Tables</h4>
                    </div>
                </div>
            </div>

        </>
  )
}