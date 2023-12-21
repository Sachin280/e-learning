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

export default function home() {
  return (
      <div className="Home">
        {/* <Navbar /> */}
        <Banner />
        <Python />
        <Goal />
        <Categray />
        <Detail />
        {/* <Footer /> */}
      </div>
  
  )
}
