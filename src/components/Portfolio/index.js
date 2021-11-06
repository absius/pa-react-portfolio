import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Portfolio() {
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
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
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
        <button data-testid="button" type="submit">Submit</button>
      </form>
      <div className="column-right">
            <h2 className="mobile-heading">Contact-Info</h2>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/patrick-abernathy-7a4b53161/">
                        <img src="../../assets/images/linked-in-logo.png" alt=''/>
                        <br />
                        <p>LinkedIn</p>
                    </a>
                </li>
                <li>
                    <a href="mailto:pat.abs@gmail.com">
                        <img src="../../assets/images/email.png"  alt=''/>
                        <br />
                        <p>pat.abs@gmail.com</p>
                    </a>
                </li>
                <li>
                    <img src="../../assets/images/phone.png" alt='' />
                    <br />
                    <p>901.550.7915</p>
                </li>
            </ul>
        </div>
    </section>
    
  );
}

export default Portfolio;
