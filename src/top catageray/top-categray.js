import React from 'react'
import design from '../img/design.jpg'
import development from '../img/development.jpg'
import Marketing from '../img/marketing.jpg'
import Itsoftware from '../img/it and software.jpg'
import Personal from '../img/personal development.jpg'
import Business from '../img/business.jpg'
import Photograhy from '../img/photography.jpg'
import Music from '../img/music.jpg'


export default function Categray() {
    return (
        <>
            <div>
                <div className='d-flex'>
                    <div>
                        <div className='top' ><img src={design} className='top-catagery' /></div>
                        <br />
                        <h5 className='ms-4'>Design</h5>
                    </div>
                    <div>
                        <img src={development} className='top-catagery' />
                        <br />
                        <h5 className='ms-4'>Web Development</h5>
                        </div>
                    <div>
                        <img src={Marketing} className='top-catagery' />
                        <br />
                        <h5 className='ms-4'>Marketing</h5>
                        </div>
                    <div>
                        <img src={Itsoftware} className='top-catagery' />
                        <br />
                        <h5 className='ms-4'>It and Software</h5>
                        </div>
                </div>
                <div className='d-flex'>
                    <div>
                        <img src={Personal} className='top-catagery' />
                        <br />
                        <h5 className='ms-4'>Personal Development</h5>
                        </div>
                    <div>
                        <img src={Business} className='top-catagery' />
                        <br />
                        <h5 className='ms-4'>Business</h5>
                        </div>
                    <div>
                        <img src={Photograhy} className='top-catagery' />
                        <br />
                        <h5 className='ms-4'>Photograhy</h5>
                        </div>
                    <div>
                        <img src={Music} className='top-catagery' />
                        <br />
                        <h5 className='ms-4'>Music</h5>
                        </div>
                </div>
            </div>
        </>
    )
}
