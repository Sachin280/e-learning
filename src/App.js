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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Python />
      <Goal />
      <Footer />
    </div>
  );
}

export default App;