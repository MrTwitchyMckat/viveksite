import React from 'react';
import './homepage-header.scss';

class HomepageHeader extends React.Component {
  translateText(event) {
    // Get elements
    const box = document.querySelector('.js-tilt');
    const redText = document.querySelector('.js-red');
    const blueText = document.querySelector('.js-blue');

    // Values for calculations
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const centerX = box.offsetLeft - boxWidth/2;
    const centerY = box.offsetTop - boxHeight/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const positionX = mouseX/Math.abs(centerX);
    const positionY = mouseY/Math.abs(centerY); 
    const translateX = 3*(3/positionX);
    const translateY = 3*(3/positionY);

    redText.style.transform = `translate(${-1 * translateX}px, ${translateY}px)`;
    blueText.style.transform = `translate(${translateX}px, ${-1 * translateY}px)`;
  }
  
  componentDidMount() {
    // Get Elements
    const tilt = document.querySelector('.js-tilt');

    tilt.addEventListener('mousemove', this.translateText);
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