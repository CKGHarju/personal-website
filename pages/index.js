import React from 'react';
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  return (
    <div>
      <Head >
        <title>Christopher Harju</title>
      </Head>
      <div className='page-container'>
        <div className="top-section-container">
          <div className="top-section">
            <div className="top-section-text">
              <h1>Christopher Harju</h1>
              <h3>Fullstack software developer</h3>
              <p className='long-text'>
                Experienced working in the JavaScript eco-system.
                Passionate about libraries such as, React, Redux and Express. I am a fast learner and a driven developer, I like being
                challenged and work on tight schedules.
              </p>
            </div>
            <div className="top-section-image">
              <img className='profile-picture' src='images/christopher_harju.png' alt='profile picture of christopher harju'/>
            </div>
            <div className="top-section-contact">
              <div className='contact-item'>
                <FontAwesomeIcon icon={faGithub} size='lg'/>
                <a className='contact-link' href="http://github.com/CKGHarju">github.com/CKGHarju</a>
              </div>
              <div className='contact-item'>
                <FontAwesomeIcon icon={faLinkedin} size='lg'/>
                <a className='contact-link' href="https://www.linkedin.com/in/christopher-harju-909b2362/">Linkedin</a>
              </div>
              <div className='contact-item'>
                <FontAwesomeIcon icon={faEnvelope} size='lg'/>
                <a className='contact-link' href="mailto:chrharju@gmail.com">chrharju@gmail.com</a>
              </div>
              <div className='contact-item'>
                <FontAwesomeIcon icon={faMobileAlt} size='lg'/>
                <a className='contact-link' href="tel:+358403724121">+358 40 372 4121</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Ubuntu';
          font-size: 16px;
        }

        h1 {
          font-style: normal;
          font-weight: 400;
        }

        h3 {
          font-style: normal;
          font-weight: 400;
        }

        @media (min-width: 400px) and (max-width: 850px) {
          /* For mobile phones: */
          .long-text {
            max-width: 400px;
          }
        }

        @media (min-width: 851px) and (max-width: 1000px) {
          /* For mobile phones: */
          .long-text {
            max-width: 600px;
          }
        }

        @media only screen and (min-width: 1001px) {
          /* For mobile phones: */
          .long-text {
            max-width: 700px;
          }
        }

        /* desktop mode */
        .page-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }

        .top-section-container {
          background-color: black;
          padding: 30px;
        }

        .top-section-contact {
          width: 100vw;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .contact-link {
          padding-left: 10px;
          text-decoration: none;
          color: white;
        }

        .contact-item {
          padding-top: 15px;
          padding-right: 30px;
        }


        .top-section {
          color: white;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .top-section-text {
        }

        .profile-picture {
          border-radius: 50%;
          height: 192px;
          width: 192px;
        }

        .top-section-image {
          padding-top: 20px;
          padding-bottom: 20px;
          align-self: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
