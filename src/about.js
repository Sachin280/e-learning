import React from 'react'
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Banner from './homepage/banner';
import { Python } from './pages/python';
import Javascript from './pages/javascript';
import Webdevelopment from './pages/web-development';
import Excel from './pages/excel';
import Datascince from './pages/data-scince';
import Amazon from './pages/amazon-aws';
import Goal from './pages/goal';
import Categray from './top catageray/top-categray';
import Detail from './top catageray/detail';
import att from './img/att.png'
import wordpres from './img/wordpress.png'
import hpe from './img/hpe.png'
import samsung from './img/samsung.png'
import cisco from './img/cisco.png'
import citi from './img/citi.png'
import ericsson from './img/ericsson.png'
import pg from './img/pg.png'

export default function Categories() {
  return (
    <>
    <div className='container'>
      <div className='d-flex '>
        <div className='w-50'>
          <div className='mt-4'>
            <h2>Get your demo</h2>
            <p>Tell us your needs and we’ll start on a custom plan to drive results.</p>
          </div>
          <div className='mt-4'>
            <h4 className='mt-2'>With Udemy as your learning partner, you can:</h4>
            <ul className='mt-3'>
              <li>Train your entire workforce with over 24,000+ courses in 15 languages</li>
              <li>Prep employees for over 200 industry-recognized certification exams</li>
              <li>Develop highly skilled tech teams in risk-free practice environments</li>
              <li>Identify emerging skills gaps, learning trends, and industry benchmarks</li>
              <li>Integrate content with your existing learning management system</li>
            </ul>
          </div>
          <div className='mt-5'>
            <h4>Trusted by</h4>
            <img src={wordpres} width='23%' className='mt-3 justify-content-between ' />
            <img src={samsung} width='23%' className='mt-3 justify-content-between ' />
            <img src={cisco} width='23%' className='mt-3 justify-content-between ' />
            <img src={att} width='23%' className='mt-3 justify-content-between ' />
            <img src={pg} width='23%' className='mt-5 justify-content-between ' />
            <img src={hpe} width='23%' className='mt-5 justify-content-between ' />
            <img src={citi} width='23%' className='mt-5 justify-content-between ' />
            <img src={ericsson} width='23%' className='mt-5 justify-content-between ' />
          </div>
        </div>
        <div className='w-50 text-center '>
          <form>
            <input type='text' name='first name' placeholder='First name*' className='name'/>
            <input type='text' name='last name' placeholder='Last name' className='name'/>
            <input type='email' name='email' placeholder='Work email*' className='email'/>
            <input type='number' name='number' placeholder='Mobile no*' className='No'/>
            <select className='select1'  required>
              <option>where are you located</option>
              <option>Albania</option>
              <option>Andorra</option>
              <option>Brazil</option>
              <option>Canada</option>
              <option>Germany</option>
              <option>India</option>
              <option>Iceland</option>
            </select>
            <input type='text' name='company name' placeholder='company name*' className='company-name'/>
            <select className='select2' required>
              <option>Company size</option>
              <option>I'm a contractor / freelancer</option>
              <option>1-199</option>
              <option>200-999</option>
              <option>1,000-5,000</option>
              <option>5,001+</option>
            </select>
            <select className='select2' required>
              <option>Number of people to train</option>
              <option>Just myself</option>
              <option>5-20</option>
              <option>21-200</option>
              <option>201-2,000</option>
              <option>2,001+</option>
            </select>
            <select className='select2' required>
              <option>Job level</option>
              <option>C-Level</option>
              <option>VP</option>
              <option>Director / Sr</option>
              <option>Manager</option>
              <option>Individual Contributor</option>
            </select>
            <input type='text' name='job title' placeholder='Job title*' className='select2'/>
            <input type='text' name='organization' placeholder="What are your organization's training needs? (Optional)" className='organization'/>

          </form>
        </div>
      </div>
    </div>
    </>
  )
}
