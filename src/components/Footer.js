// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>PT DETAMA REKA UTAMA</h4>
          <p>Jl Terusan Jakarta No . 175A Kota Bandung, 
          Jawa Barat 40291</p>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            Phone: +62 811 234 586 <br />
            Email: detama@detamareka.com
          </p>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Inspection</li>
            <li>Engineering Design</li>
            <li>Automation</li>
            <li>Maintenance</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PT Detama Reka Utama. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;