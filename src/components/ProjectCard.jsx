import React from 'react';
import '../assets/scss/project-card.scss';

class ProjectCard extends React.Component {
  render() { 
    return (
      <div id="projects" className="project-card">
        <div className="container">
          <a href={this.props.link} className="project-card__container">
            <div className="project-card__background" style={{animationDelay: this.props.delay}}>
              <div className="project-card__image">
                <img src={this.props.image} alt={`${this.props.title} Card Image`} />
              </div>
            </div>
            <div className="project-card__title" style={{animationDelay: this.props.delay}}>
              {this.props.title}
            </div>
          </a>
        </div>
      </div>
    );
  }
}
 
export default ProjectCard;