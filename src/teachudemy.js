import React from 'react'
import { useState } from 'react'
import banner from './img/banner.jpg'
import teach from './img/teachway.jpg'
import inspire from './img/inspire.jpg'
import reward from './img/reward.jpg'
import launch from './img/launch.jpg'
import record from './img/record.jpg'
import plan from './img/plan.jpg'

export default function Teachudemy() {
    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner mt-3 mb-4 ">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src={banner} className="d-block w-100" alt="..." />
                        {/* carousel-caption d-none d-md-block */}
                        <div className="banner shadow-lg ">
                            <h1>Subscribe to the best of Udemy</h1>
                            <p>With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, design, and more.</p>
                            <button className="btn btn-secondary ">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center '><strong>So many reasons to start</strong></h1>
                <div className='d-flex justify-content-center '>
                    <div className='teaching'>
                        <img src={teach} />
                        <h4>Teach your way</h4>
                        <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                    <div className='teaching'>
                        <img src={inspire} />
                        <h4>Inspire learners</h4>
                        <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                    </div>
                    <div className='teaching'>
                        <img src={reward} />
                        <h4>Get rewarded</h4>
                        <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                    </div>
                </div>
            </div>

            <div className='bg-purpule'>
                <div className='d-flex justify-content-center '>
                    <div className='info'>
                        <h3>62M</h3>
                        <p>Students</p>
                    </div>
                    <div className='info'>
                        <h3>75+</h3>
                        <p>Languages</p>
                    </div>
                    <div className='info'>
                        <h3>830M</h3>
                        <p>Enrollments</p>
                    </div>
                    <div className='info'>
                        <h3>180+</h3>
                        <p>Countries</p>
                    </div>
                    <div className='info'>
                        <h3>15,000+</h3>
                        <p>Enterprise customers</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div className='text-center justify-content-center '>
                        <h1 className='mt-5 mb-4'><strong>How to begin</strong></h1>
                        <div className=''>
                            <div className=' d-flex text-center justify-content-center' >
                                <div className='me-5 mb-2  ms-5 ps-3 '><button className={showtab === 1 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(1)}>Plan your curriculum</button></div>
                                <div className='me-5 mb-2 '><button className={showtab === 2 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(2)}>Record your video</button></div>
                                <div className='me-5 mb-2 '><button className={showtab === 3 ? 'btn-border active' : 'bt-border'} onClick={() => handletab(3)}>Launch your course</button></div>

                            </div>
                            <div className={showtab === 1 ? "container-fluid react-tech d-flex text-start active " : "container-fluid react-tech none"}>
                                <div> <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.</p>

                                    <p>The way that you teach — what you bring to it — is up to you.</p>

                                    <p><strong>How we help you</strong></p>
                                    <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.

                                </p></div>
                                <div><img src={plan} width='100%' /></div>
                            </div>
                            <div className={showtab === 2 ? "container-fluid react-tech d-flex text-start active " : "container-fluid react-tech none"}>
                                <div> <p>Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.</p>

                                    <p>If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.</p>

                                    <p><strong>How we help you</strong></p>
                                    <p>Our support team is available to help you throughout the process and provide feedback on test videos.

                                </p></div>
                                <div><img src={record} width='100%' /></div>
                            </div>
                            <div className={showtab === 3 ? "container-fluid react-tech d-flex text-start active " : "container-fluid react-tech none"}>
                                <div> <p>Gather your first ratings and reviews by promoting your course through social media and your professional networks.</p>

                                    <p>Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.</p>

                                    <p><strong>How we help you</strong></p>
                                    <p>Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.</p></div>
                                <div><img src={launch} width='100%' /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-gradient text-center justify-content-center'>
                <div className='instructor'>
                    <h2>Become an instructor today</h2>
                    <p>Join one of the world’s largest online learning marketplaces.</p>

                </div>
            </div>

        </>


    )
}
