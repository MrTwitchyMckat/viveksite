import React, { Component } from "react";
import "./about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="pad-t4 pad-b4">
        <div className="container-fluid about-sec">
          <div className="row">
            <div className="col-5 profile">
              <img src="https://picsum.photos/800/600/?random" alt="yeet" />
            </div>
            <div className="col-7">
              <h1 className="text-center about-header">
                ABOUT <strong>ME</strong>
              </h1>
              <p className="content">
                I was born and raised in the biggest little city, Reno, Nevada.
                I’m a self-taught graphic designer/front end web developer. From
                as far back as I can remember I’ve been creating things.
                Sometimes those things were drawings of my favorite cars, or
                maybe sometimes it was weird contraptions made with things from
                my junk drawer. Way back in 8th grade I was mistakenly put in a
                class called “Intro to Graphic Design.” I honestly was a little
                mad since I wanted to be in a robotics class with my friends,
                but I rolled with it. Turns out I had a real knack for designing
                stuff. Years later I’ve done designs that I couldn’t have even
                dreamed about then. As I designed I was surrounded by my friends
                who were software developers, or engineering students. This
                mixed with my passion of computers pushed me into learning to
                code. From there I’ve the varying points of web development from
                WordPress to using ReactJS to create this very site. Design-wise
                I’ve tried to touch a little bit of everything. I’ve done basic
                3D modeling, drawing, digital painting, inking, and CAD drawing.
                One thing I’ve learned is that everyone is different in what
                they want. Some designs may take a day and one or two drafts,
                where as other designs may take weeks to months to get to the
                final product. I take care to work with the needs of the design
                and help guide it in the right direction. My end goal is to get
                to a point where I would happily hang the final product up on my
                wall. Web Development was a little bit scary for me when I
                started. But as soon as I was more comfortable with it, I fell
                in love with it. With my experience of print page layout mixed
                with some fundamental rules of graphic design I was able to
                create functional and good-looking sites in no time. I am still
                learning everyday about new skills and techniques that can be
                applied to future sites. I believe in simplicity when it comes
                to front end development. Getting beautiful looking content in
                front of your end user as fast as possible is one of the best
                things you could do. Although this strategy doesn’t always work
                out, it is one that I have followed using far too many sites
                filled with unnecessary frills and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
