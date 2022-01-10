import React from 'react';
import './homepage-header.scss';

class HomepageHeader extends React.Component {
  render() { 
    return( 
    <div className="homepage-header"> 
      <div className="container">
        <div className="homepage-header__container">
          <h1 className="homepage-header__title --white">Hi, I'm a developer <br/>doing internet stuff.</h1>
          <h1 className="homepage-header__title --red">Hi, I'm a developer <br/>doing internet stuff.</h1>
          <h1 className="homepage-header__title --blue">Hi, I'm a developer <br/>doing internet stuff.</h1>
        </div>
      </div>
    </div>
    );
  }
}
 
export default HomepageHeader;