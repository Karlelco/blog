import Person from '../../components/person/Person';
import { motion } from 'framer-motion';
import React, { useState, FormEvent } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // Send the form data to the server or email service
    // You can use libraries like Axios or fetch to make the API request

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section className="hero   bg-base-200">
      <div className=" flex flex-col-reverse lg:flex-row gap-4 justify-between mt-4">
        <div>
          <Person />
        </div>

        <motion.div
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1.8 }}
          className='card card-bordered dark:border-slate-200 px-10 py-2 space-y-6'
        >
          <div>
            <h1 className=' text-pretty font-bold text-3xl'>
              Get in touch
            </h1>
            <p>
              Fill out the form below to send me an email and I will get back to you as soon as possible!
              Get your website or web application developed by me.
            </p>
            
          </div>
          <div>
            <form onSubmit={ handleSubmit }>
              <p className="font-bold text-xl">Name</p>
              <input
                className="input w-full input-bordered"
                type="text"
                placeholder="Name"
                value={ name }
                onChange={ (e) => setName(e.target.value) }
              />

              <p className="font-bold text-xl">Email</p>
              <input
                className="input w-full input-bordered"
                type="email"
                placeholder="Email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
              />

              <p className="font-bold text-xl">Message</p>
              <textarea
                className="textarea w-full textarea-bordered h-24"
                placeholder="Bio"
                value={ message }
                onChange={ (e) => setMessage(e.target.value) }
              ></textarea>
              <div>
                <button type="submit" className="btn w-fit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
