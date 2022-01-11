import React from 'react';
import './homepage-header.scss';

class HomepageHeader extends React.Component {
  componentDidMount() {
    // Get Elements
    const tilt = document.querySelector('.js-tilt');
    const redText = document.querySelector('.js-red');
    const blueText = document.querySelector('.js-blue');

    tilt.addEventListener('mousemove', function (event) {
      // Get title box
      const box = document.querySelector('.js-tilt');
      
      // Values for calculations
      const boxWidth = box.offsetWidth;
      const boxHeight = box.offsetHeight;
      const centerX = box.offsetLeft - boxWidth/2;
      const centerY = box.offsetTop - boxHeight/2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
  
      console.log(mouseX/centerX, mouseY/centerY);
    });
  }
  render() { 
    return( 
    <div className="homepage-header"> 
      <div className="container">
        <div className="homepage-header__container">
          <div className="titles js-tilt">
            <h1 className="homepage-header__title --white">Hi, I'm a developer <br/>doing internet stuff.</h1>
            <h1 className="homepage-header__title --red js-red">Hi, I'm a developer <br/>doing internet stuff.</h1>
            <h1 className="homepage-header__title --blue js-blue">Hi, I'm a developer <br/>doing internet stuff.</h1>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
 
export default HomepageHeader;