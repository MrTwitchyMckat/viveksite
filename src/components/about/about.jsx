import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container-fluid about-sec">
                    <div className="row">
                    <div className="col-12"><h1 className="text-center about-header">ABOUT ME</h1></div>
                        
                            <div className="col-3">
                                <img src="#" alt="yeet"/>
                            </div>
                            <div className="col-9">
                                <h1>yeet</h1>
                            </div>
                    </div>
                </div>
            </div>  
         );
    }
}
 
export default About;