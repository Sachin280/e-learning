import React from 'react'
import aws from "../img/aws.jpg"
import aws1 from "../img/aws1.jpg"
import aws2 from "../img/aws2.jpg"

export default function Amazon() {
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
                        <img src={aws} />
                        <h4>[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={aws1} />
                        <h4>Big Data on Amazon web services (AWS)</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={aws2} />
                        <h4>Amazon Web Services (AWS) Certified - 4 Certifications!</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={aws} />
                        <h4>AWS Certified Cloud Practitioner Exam Training [New] 2023</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={aws1} />
                        <h4>AWS Serverless APIs & Apps - A Complete Introduction</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={aws2} />
                        <h4>AWS Certified Solutions Architect Associate Training SAA-C03</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={aws} />
                        <h4>AWS Lambda & Serverless Architecture Bootcamp (Build 5 Apps)</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={aws1} />
                        <h4>AWS Business Essentials - The Business Value of AWS [2023]</h4>
                    </div>
                    <div className="w-auto m-2 btn-border ">
                        <img src={aws2} />
                        <h4>Learn AWS - Deploy Java Spring Boot to AWS Elastic Beanstalk</h4>
                    </div>
                </div>
            </div>

        </>
  )
}