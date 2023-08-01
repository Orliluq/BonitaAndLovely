import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Facebook from '../../assets/img/facebook.png';
import Twitter from '../../assets/img/gorjeo.png';
import Gmail from '../../assets/img/gmail.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <div className="footer__logo">
          <img src={Logo} alt="Company logo" />
          <p className="footer__logo-description">We are an online store for makeup and beauty, offering high-quality products and excellent customer service.</p>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" width="50" height="50" /></a>
          <a href="https://www.twitter.com/" rel="noopener noreferrer"><img src={Twitter} alt="Twitter" width="50" height="50" /></a>
          <a href="mailto:contacto@tutienda.com"><img src={Gmail} alt="Email" width="50" height="50" /></a>
        </div>
      </div>
      <div className="footer__column">
        <h4>Catalog</h4>
        <ul className="footer__list">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/subcategories">Subcategories</Link></li>
          <li><Link to="/all">All</Link></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Information</h4>
        <ul className="footer__list">
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Terms and Conditions</h4>
        <ul className="footer__list">
          <li><Link to="/terms-of-use">Terms of Use</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/cookies-policy">Cookies Policy</Link></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Customer Service</h4>
        <ul className="footer__list">
          <li><Link to="/customer-service">Customer Service</Link></li>
          <li><Link to="/divisions">Divisions</Link></li>
        </ul>
        <h4>Connect with Us</h4>
        <ul className="footer__list">
          <li><Link to="/newsletter">Newsletter</Link></li>
          <li><Link to="/social-media">Social Media</Link></li>
        </ul>
      </div>
      <div className="footer__bottom">
        <a href="#top"><FontAwesomeIcon icon={faArrowUp} /></a>
        <div className="footer__payment-icons">
          <FontAwesomeIcon icon={faCreditCard} />
          <FontAwesomeIcon icon={faMoneyCheck} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;