import React from 'react';
import '../assets/scss/footer.scss';

// Components
import Contact from './Contact';

class Footer extends React.Component {
  render() { 
    return (
      <div className="footer">
        <div className="container">
          <div className="footer__container">
            <div className="footer__projects">
              <p className="arrow-up">↑</p>
              <a href="#projects">Projects Above</a>
            </div>
            <Contact tagline="Let's become cyberspace besties?"/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Footer;