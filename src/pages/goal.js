import React from 'react'
import queot from '../img/quote.svg'
import back from '../img/back.png'
import next from '../img/next.png'
import { useState } from 'react'

export default function Goal() {
    function scrollContainer() {
        // evt.preventDefault();
        // scrollContainer.scrollLeft += evt.deltaY;
    }

    function nextBtn() {
        // scrollContainer.style.scrollBehavior = "smooth";
        // scrollContainer.scrollLeft += 900;
    }
    function backBtn() {
        // scrollContainer.style.scrollBehavior = "smooth";
        // scrollContainer.scrollLeft -= 900;
    }


    return (
        <>
            <div className='container-fluid '>
                <h4 className='ms-5 mt-5'>How learners like you are achieving their goals</h4>

                <div className="gallery-warp">
                    <img src={back} id="backBtn" onClick={backBtn()} alt />
                    <div onClick={scrollContainer()} className="gallery" >
                        <div>
                            <div className='w-75 border-goal p-4 d-inline-block img'>
                                <img src={queot} className='img-width' /><br />
                                <p className='pt-4'>
                                    I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
                                </p>
                                <p>
                                    <span className='circle'>WA</span>
                                    <span className='ps-3 '>Will A</span>
                                </p>
                                <hr />
                                <p>
                                    <a href=''>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a>
                                </p>
                            </div>
                            <div className='w-75 border-goal p-4 d-inline-block img'>
                                <img src={queot} className='img-width' /><br />
                                <p className='pt-4 pb-5'>
                                    This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys
                                </p>
                                <p>
                                    <span className='circle'>RF</span>
                                    <span className='ps-3 '>Ron F</span>
                                </p>
                                <hr />
                                <p>
                                    <a href=''>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='w-75 border-goal p-4 d-inline-block img'>
                                <img src={queot} className='img-width' /><br />
                                <p className='pt-4'>
                                    One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.

                                </p>
                                <p>
                                    <span className='circle'>PF</span>
                                    <span className='ps-3 '>Phillip W</span>
                                </p>
                                <hr />
                                <p>
                                    <a href=''>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a>
                                </p>
                            </div>
                            <div className='w-75 border-goal p-4 d-inline-block img'>
                                <img src={queot} className='img-width' /><br />
                                <p className='pt-4'>
                                    I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course.

                                </p>
                                <p>
                                    <span className='circle'>SM</span>
                                    <span className='ps-3 '>Surya M</span>
                                </p>
                                <hr />
                                <p>
                                    <a href=''>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={next} id="nextBtn" onClick={nextBtn()} alt />
                </div>

                {/* <div className='w-25 border-goal p-4 d-inline-block '>
                    <img src={queot} className='img-width' /><br />
                    <p className='pt-4'>
                        I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
                    </p>
                    <p>
                        <span className='circle'>WA</span>
                        <span className='ps-3 '>Will A</span>
                    </p>
                    <hr />
                    <p>
                        <a href=''>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a>
                    </p>
                </div>
                <div className='w-25 border-goal p-4 d-inline-block '>
                    <img src={queot} className='img-width' /><br />
                    <p className='pt-4 pb-5'>
                        This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys
                    </p>
                    <p>
                        <span className='circle'>RF</span>
                        <span className='ps-3 '>Ron F</span>
                    </p>
                    <hr />
                    <p>
                        <a href=''>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a>
                    </p>
                </div>
                <div className='w-25 border-goal p-4 d-inline-block '>
                    <img src={queot} className='img-width' /><br />
                    <p className='pt-4'>
                        One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.

                    </p>
                    <p>
                        <span className='circle'>PF</span>
                        <span className='ps-3 '>Phillip W</span>
                    </p>
                    <hr />
                    <p>
                        <a href=''>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a>
                    </p>
                </div>
                <div className='w-25 border-goal p-4 d-inline-block '>
                    <img src={queot} className='img-width' /><br />
                    <p className='pt-4'>
                        I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course.

                    </p>
                    <p>
                        <span className='circle'>SM</span>
                        <span className='ps-3 '>Surya M</span>
                    </p>
                    <hr />
                    <p>
                        <a href=''>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</a>
                    </p>
                </div> */}


            </div>
        </>
    );
    
    // let scrollContainer = document.querySelector(".gallery");
    // let backBtn = document.getElementById("backBtn");
    // let nextBtn = document.getElementById("nextBtn");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // })
    // nextBtn.addEventListener("click", () => {
    //     scrollContainer.style.scrollBehavior = "smooth";
    //     scrollContainer.scrollLeft += 900;
    // });
    // backBtn.addEventListener("click", () => {
    //     scrollContainer.style.scrollBehavior = "smooth";
    //     scrollContainer.scrollLeft -= 900;
    // });
}
