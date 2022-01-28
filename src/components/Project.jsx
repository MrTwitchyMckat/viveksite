import React from 'react';
import '../assets/scss/project.scss';

class Project extends React.Component {

  render() { 
    return (
      <div className="project">
        <div className="container">
          <div className="project__columns">
            <div className="project__column">
              <div className="project__content">
                <p className="project__subhead">Project {this.props.projectNumber} - <a href="/#projects" className="project__link --secondary">Back to Projects</a></p>
                <h1 className="project__title">{this.props.projectTitle}</h1>
                <p className="project__subhead">{this.props.projectInfo}</p>
                <p className="project__body">
                  {this.props.projectDescription}
                </p>
                <a href={this.props.projectLink} target="_blank" className="project__link">See Project</a>
              </div>
            </div>
            <div className="project__column">
              <div className="project__image">
                <img src={this.props.projectImage} alt={this.props.projectTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Project;