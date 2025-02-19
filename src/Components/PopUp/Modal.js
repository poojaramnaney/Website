import React from 'react';
import './Modal.css';
import PopUp from '../../images/PopUp.png';
import { useEffect } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OVERLAY = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0 , 0 ,0 ,0.77)',
  zIndex: 1000,
};

export default function Modal(props) {

  useEffect(() => {
    if (props.trigger) {
      const snowfallContainer = document.querySelector('.snowfall');

      for (let i = 0; i < 17; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
        snowfallContainer.appendChild(snowflake);
      }
    }
  }, [props.trigger]);

  return props.trigger ? (
    <>
      <div style={OVERLAY} />
      <div className="popup">
        <div className="popup-inner">
        <div className="social-icons">
          <a href="https://www.instagram.com/assetmerkle.igdtuw/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          </a>
          <a href="https://twitter.com/AM_igdtuw" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} />
          </a>
          <a href="https://www.linkedin.com/company/asset-merkle/mycompany/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
            </a>
            </div>
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            &times;
          </button>
          {props.children}
          <div className="popup-content">
          <img className="popup-img" src={PopUp} alt="Popup" />
          <div className="popup-text">
          <div className="popup-text1"> ASSETMERKLE Presents   </div>
          <div className="popup-text2">Twitter/X Spaces Podcast</div>
          <div className="popup-text3">CHAIN PE CHARCHA</div>
          <button
              className="popup-button"
              onClick={() => (window.location.href = 'https://x.com/AM_igdtuw/status/1742247033535373781?s=20')}
            >
              Find it here!
            </button>
          </div>
          </div>
          <a href="/event" className="find-more-events">FIND MORE EVENTS!</a>
        </div>
      </div>
      <div className="snowfall"></div>
    </>
  ) : '';
}
