import React from 'react';
import '../assets/scss/footer.scss';

// Components
import Contact from './Contact';

class Footer extends React.Component {
  componentDidMount() {}
  render() { 
    return (
      <div className="footer">
        <div className="container">
          <div className="footer__container">
            <Contact tagline="Let's become cyberspace besties?"/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Footer;