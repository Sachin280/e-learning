import React from 'react'
import { useState } from 'react'
import python from "../img/python.jpg"
import python1 from "../img/python1.jpg"
import python2 from "../img/python data scince.jpg"
import excel from "../img/excel.jpg"
import excel1 from "../img/excel1.jpg"
import excel2 from "../img/excel3.jpg"
import JavaScript from "../img/javascript.png"
import JavaScript1 from "../img/javascript1.jpg"
import JavaScript2 from "../img/javascript2.png"
import web from "../img/web development.jpg"
import web1 from "../img/web development1.jpg"
import web2 from "../img/web development2.jpg"
import data from "../img/data scince.jpg"
import data1 from "../img/data scince1.jpg"
import data2 from "../img/data scince2.jpg"
import aws from "../img/aws.jpg"
import aws1 from "../img/aws1.jpg"
import aws2 from "../img/aws2.jpg"



// export default function Python()
export const Python = () => {
    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }
    return (
        <>
            {/* tab no 1 */}
            <div className='d-flex flex-row' >
                <div className='me-5 mb-2  ms-5 ps-3 '><button className={showtab === 1 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(1)}>python</button></div>
                <div className='me-5 mb-2 '><button className={showtab === 2 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(2)}>Excel</button></div>
                <div className='me-5 mb-2 '><button className={showtab === 3 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(3)}>JavaScript</button></div>
                <div className='me-5 mb-2 '><button className={showtab === 4 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(4)}>Web Development</button></div>
                <div className='me-5 mb-2 '><button className={showtab === 5 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(5)}>Data Scince</button></div>
                <div className='me-5 mb-2 '><button className={showtab === 6 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(6)}>Amazon aws</button></div>

            </div>
            <div className={showtab === 1 ? "container-fluid react-border active " : "container-fluid react-border none"}>
                <div>
                    <h2 className>Expand your career opportunities with Python</h2>
                    <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to </p>
                    <button className="btn-border fw-bold">Explore Python</button>
                </div>


                <div className="d-flex flex-row overflow-scroll ">
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
            {/* tab no 2 */}
            <div className={showtab===2?"container-fluid react-border active":"container-fluid react-border none"}>
                <div>
                    <h2 className>Analyze and visualize data with Excel</h2>
                    <p>Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights...</p>
                    <button className="btn-border fw-bold">Explore Excel</button>
                </div>


                <div className="d-flex flex-row overflow-scroll">
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


            {/* tab no 3 */}
            <div className={showtab===3?"container-fluid react-border ":"container-fluid react-border none"}>
                <div>
                    <h2 className>Grow your software development skills with JavaScript</h2>
                    <p>JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS...</p>
                    <button className="btn-border fw-bold">Explore JavaScript</button>
                </div>


                <div className="d-flex flex-row overflow-scroll">
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

            {/* tab no 4 */}
            <div className={showtab===4?"container-fluid react-border active ":"container-fluid react-border none"}>
                <div>
                    <h2 className>Build websites and applications with Web Development</h2>
                    <p>The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.</p>
                    <button className="btn-border fw-bold">Explore Web Development</button>
                </div>


                <div className="d-flex flex-row overflow-scroll">
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

            {/* tab no 5 */}
            <div className={showtab===5?"container-fluid react-border active ":"container-fluid react-border none"}>
                <div>
                    <h2 className>Lead data-driven decisions with Data Science</h2>
                    <p>Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, and analytics...</p>
                    <button className="btn-border fw-bold">Explore Data Science</button>
                </div>


                <div className="d-flex flex-row overflow-scroll">
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



            {/* tab no 6 */}
            <div className={showtab===6?"container-fluid react-border active ":"container-fluid react-border none"}>
                <div>
                    <h2 className>Become an expert in cloud computing with AWS Certification</h2>
                    <p>Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more you can earn. Anyone can learn AWS skills, and with AWS online training, you can move at your own pace.</p>
                    <button className="btn-border fw-bold">Explore Amazon AWS</button>
                </div>


                <div className="d-flex flex-row overflow-scroll">
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
