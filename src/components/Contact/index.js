import React, { useState } from 'react';
import emailImage from '../../assets/images/email.png';
import LinkedInImage from '../../assets/images/linked-in-logo.png';
import phoneImage from '../../assets/images/phone.png';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 id="contactform" data-testid="h1tag">Contact me</h1>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        < br/>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" className="contact-button" type="submit">Submit</button>
      </form>
      <div className="contact-info">
           
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/patrick-abernathy-7a4b53161/">
                        
                        <img src={LinkedInImage}  alt="linkedin" />
                        <br />
                        <p>LinkedIn</p>
                    </a>
                </li>
                <li>
                    <a href="mailto:pat.abs@gmail.com">
                    <img src={emailImage}  alt="email" />
                        <br />
                        <p>pat.abs@gmail.com</p>
                    </a>
                </li>
                <li>
                <img src={phoneImage}  alt="phone" />
                   
                    <br />
                    <p>901.550.7915</p>
                </li>
            </ul>

        </div>
    </section>
    
  );
}

export default ContactForm;
