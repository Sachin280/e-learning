import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import logo from "../img/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <Typography variant="h6" component="div">
                <Link to='/' className='text-text-decoration-none text-white'>
                  <img src={logo} alt='logo' style={{ width: "100px" }} />
                </Link>
              </Typography>
              <div className='feature'>Categories</div>
              <div className='feature mt-3'>
                <Link to='/about' className='text-text-decoration-none text-white'>
                  <p className=''>Udemy Business</p>
                </Link>
              </div>
              <div className='feature mt-3'>
                <Link to='/teachudemy' className='text-text-decoration-none text-white'>
                  <p className=''>Teach on Udemy</p>
                </Link></div>
              <div className='feature'>My learning</div>
              <div className='feature'><FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#fff", }} />
              </div>

            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </React.Fragment>
      <div>
        <div className='Categories'>
          <ul className='d-flex list-unstyled ms-4'>
            <li className='ms-4 border-nav'>
              <Link to='/Watch' className='text-text-decoration-none text-white'>
                <p className=''><b>Watch</b></p>
              </Link>
            </li>
            <li className='ms-4 border-nav'>
              <Link to='/Fashion' className='text-text-decoration-none text-white'>
                <p className=''><b>Fashion</b></p>
              </Link>
            </li>
            <li className='ms-4 border-nav'>
              <Link to='/Electronic' className='text-text-decoration-none text-white'>
                <p className=''><b>Electronic</b></p>
              </Link>
            </li>
            <li className='ms-4 border-nav'>
              <Link to='/Led' className='text-text-decoration-none text-white'>
                <p className=''><b>Led</b></p>
              </Link>
            </li>
            <li className='ms-4 border-nav'>
              <Link to='/NewRealese' className='text-text-decoration-none text-white'>
                <p className=''><b>New Realese</b></p>
              </Link>
            </li>
            <li className='ms-4 border-nav'>
              <Link to='/Homekitchen' className='text-text-decoration-none text-white'>
                <p className=''><b>Home & kitchen</b></p>
              </Link>
            </li>
            <li className='ms-4 border-nav'>
              <Link to='/Toys' className='text-text-decoration-none text-white'>
                <p className=''><b>Toys</b></p>
              </Link>
            </li>
            <li className='ms-4 border-nav'>
              <Link to='/shoes' className='text-text-decoration-none text-white'>
                <p className=''><b>shoes</b></p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>




  );
}