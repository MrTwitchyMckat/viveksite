import React from 'react';
import '../assets/scss/nav.scss';

class Nav extends React.Component {
  render() { 
    return (
      <div className="nav">
        <div className="container">
          <div className="nav__logo-container">
            <div className="logos">
              <svg className="logo1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 100" fill="#ffffff" width="80px" height="80px">
                <path className="st2" d="M89.66,44.23L72.3,44.4L54.04,14.79L46.31,0.54v16.58l0.02,0.03L46.2,83.33l-0.78-0.99l-2.07-2.64L20.9,51.04  l19.4-0.08l-0.1-6.73h-29.5l-4.32,0.04l40.17,51.27l0.76,0.97l2.86,3.14l2.86-3.14l0.76-0.97l40.17-51.27L89.66,44.23z M57.01,79.7  l-2.07,2.64l-0.78,0.99l-0.1-52.42l-0.33-0.54l0-0.05l0.33,0.59l8.95,14.51l3.55,5.76l8.58-0.09l4.32-0.05L57.01,79.7z"/>
              </svg>
              <svg className="logo2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 100" fill="#66dbff" width="80px" height="80px">
                <path className="st2" d="M89.66,44.23L72.3,44.4L54.04,14.79L46.31,0.54v16.58l0.02,0.03L46.2,83.33l-0.78-0.99l-2.07-2.64L20.9,51.04  l19.4-0.08l-0.1-6.73h-29.5l-4.32,0.04l40.17,51.27l0.76,0.97l2.86,3.14l2.86-3.14l0.76-0.97l40.17-51.27L89.66,44.23z M57.01,79.7  l-2.07,2.64l-0.78,0.99l-0.1-52.42l-0.33-0.54l0-0.05l0.33,0.59l8.95,14.51l3.55,5.76l8.58-0.09l4.32-0.05L57.01,79.7z"/>
              </svg>
              <svg className="logo3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 100" fill="#ff4553" width="80px" height="80px">
                <path className="st2" d="M89.66,44.23L72.3,44.4L54.04,14.79L46.31,0.54v16.58l0.02,0.03L46.2,83.33l-0.78-0.99l-2.07-2.64L20.9,51.04  l19.4-0.08l-0.1-6.73h-29.5l-4.32,0.04l40.17,51.27l0.76,0.97l2.86,3.14l2.86-3.14l0.76-0.97l40.17-51.27L89.66,44.23z M57.01,79.7  l-2.07,2.64l-0.78,0.99l-0.1-52.42l-0.33-0.54l0-0.05l0.33,0.59l8.95,14.51l3.55,5.76l8.58-0.09l4.32-0.05L57.01,79.7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Nav;