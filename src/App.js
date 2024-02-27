import logo from './logo.svg';
import './App.css';
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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Watch from './Watch';
import Shoes from './shoes';
import Toys from './Toys';
import Homekitchen from './Homekitchen';
import NewRealese from './NewRealese';
import Led from './Led';
import Electronic from './Electronic';
import Fashion from './Fashion';
import Teachudemy from './teachudemy';
import Layout from './top catageray/Layout';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='watch' element={<Watch />} />
            <Route path='shoes' element={<Shoes />} />
            <Route path='toys' element={<Toys />} />
            <Route path='Homekitchen' element={<Homekitchen />} />
            <Route path='NewRealese' element={<NewRealese />} />
            <Route path='led' element={<Led />} />
            <Route path='electronic' element={<Electronic />} />
            <Route path='fashion' element={<Fashion />} />
            <Route path='teachudemy' element={<Teachudemy />} />
            {/* <Route path='contact' element={<Contact />} />
            <Route path='product' element={<OurStore />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    // <div className="App">
    //   <Navbar />
    //   <Banner />
    //   <Python />
    //   <Goal />
    //   <Categray />
    //   <Detail />
    //   <Footer />
    // </div>
  );
}

export default App;