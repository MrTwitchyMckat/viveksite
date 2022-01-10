import React from 'react';
import './loading.scss';

class Loading extends React.Component {
  render() { 
    return (
      <div className="loading">
        <div className="loading__container">
          <p className="glitch3">loading...</p>
          <p className="glitch2">loading..</p>
          <p className="glitch1">loading...</p>
        </div>
      </div>
    );
  }
}
 
export default Loading;