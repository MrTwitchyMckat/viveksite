import React from 'react';
import '../assets/scss/footer.scss';

class Footer extends React.Component {
  render() { 
    return (
      <div className="footer">
        <div className="container">
          <div className="footer__container">
            <div className="footer__foot">
              <img src="src/assets/foot.png" alt="foot"/>
            </div>
            <div className="footer__info">
              Contact Me
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Footer;