import React, { useState } from 'react'; 
import emailjs from 'emailjs-com'; 
import { contact } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    companyName: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_1yy4v2t', 'template_c3szh1f', e.target, 'csX3HUXQ48SluKZD7')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitting(false);
          setStateMessage('Your message has been sent!');
          setFormData({ userName: '', userEmail: '', companyName: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
          setStateMessage('There was an error sending your message.');
        },
      );
  };

  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      
      <form onSubmit={sendEmail} className='contact__form'>
        <div className='form__group'>
          <label htmlFor='user_name'>
            Name
            <input
              type='text'
              id='user_name'
              name='userName'
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='form__group'>
          <label htmlFor='user_email'>
            Email
            <input
              type='email'
              id='user_email'
              name='userEmail'
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='form__group'>
          <label htmlFor='company_name'>
            Company
            <input
              type='text'
              id='company_name'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='form__group'>
          <label htmlFor='message'>
            Message
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type='submit' className='btn btn--outline' style={{ textTransform: 'none' }} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
