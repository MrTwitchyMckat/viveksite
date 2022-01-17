import React from 'react';
import '../assets/scss/contact.scss';

class Contact extends React.Component {

  copyEmail(event) {
    // Prevent normal link behavior
    event.preventDefault();
    
    const el = event.target;

    // Get email from data atr
    const email = el.dataset.email;

    // Return if email is empty
    if (email.length <= 0) return;

    // Do the copy
    navigator.clipboard.writeText(email);

    // alert user to copy
    el.innerHTML = 'Copied Email!';
    el.classList.add('copied');

    setInterval(() => {
    el.innerHTML = 'Email';
    el.classList.remove('copied');
    }, 3000);
  }

  componentDidMount() {
    const email = document.querySelector('.js-email');
    email.addEventListener('click', this.copyEmail);
  }

  render() { 
    return (
      <div className="contact">
        <p className="contact__text">♡ {this.props.tagline} ♡</p>
        <div className="contact__links">
          <a href="https://www.linkedin.com/in/vbhardwaj1/" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/mrtwitchymckat/" target="_blank">Instagram</a>
          <a className="js-email" data-email="vivekbhardwajnv@gmail.com" href="">Email</a>
        </div>
      </div>
    );
  }
}
 
export default Contact;


