// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

// Import ikon dan logo dari folder assets
import visionIcon from '../assets/vision-icon.png';
import missionIcon from '../assets/mission-icon.png';
import logoPln from '../assets/logo-pln.png';
import logoWika from '../assets/logo-wika.png';
import logoSkkMigas from '../assets/logo-skk-migas.png';
import logoPertamina from '../assets/logo-pertamina.png';
import logoBumn from '../assets/logo-bumn.png';
import logoMedco from '../assets/logo-medco.png';
import logoTuvNord from '../assets/logo-tuv-nord.png';
import logoHk from '../assets/logo-hk.png';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <h1>About Us</h1>

        {/* Bagian Paragraf Awal */}
        <section className="intro-section">
          <div className="intro-card">
            PT Detama Reka Utama is a local company that is fully owned by Indonesian
            citizen with a primary business in providing services which related with inspection,
            maintenance, testing and commissioning services in oil and gas, geothermal, power
            plant, etc. and also construction on other lines of business.
          </div>
          <div className="intro-card">
            PT Detama Reka Utama is a service-based company supported by dynamic and
            qualified professionals with good working knowledge and experience.
          </div>
          <div className="intro-card">
            PT Detama Reka Utama is a service-based company supported by dynamic and
            qualified professionals with good working knowledge and experience.
          </div>
        </section>
      </div>

      {/* --- UPDATED: Wrapper baru untuk background biru --- */}
      <div className="vision-mission-wrapper">
        <div className="about-us-container">
          <section className="vision-mission-section">
            <div className="vm-item vision">
              <img src={visionIcon} alt="Vision Icon" className="vm-icon" />
              <div className="vm-text">
                <h3>Our Vision</h3>
                <p>Become the best quality consulting, procurement and technical services company.</p>
              </div>
            </div>
            <div className="vm-item mission">
              <img src={missionIcon} alt="Mission Icon" className="vm-icon" />
              <div className="vm-text">
                <h3>Our Mission</h3>
                <p>
                  Build professional cooperation with work partners;
                  <br />
                  Becoming a trusted company and always innovates;
                  <br />
                  Conducting HR development to produce quality workers and create a
                  conducive work environment.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* --- Akhir bagian yang diupdate --- */}


      <div className="about-us-container">
        {/* Bagian Promises */}
        <section className="promises-section">
          <h2>Our Promises</h2>
          <p>Making number one local companies to providing goods, material and engineering services</p>
        </section>

        {/* Bagian Klien */}
        <section className="client-section">
          <h2>Our Client</h2>
          <div className="client-logos">
            <img src={logoPln} alt="PLN Enjiniring" />
            <img src={logoWika} alt="WIKA" />
            <img src={logoSkkMigas} alt="SKK Migas" />
            <img src={logoPertamina} alt="Pertamina" />
            <img src={logoBumn} alt="BUMN" />
            <img src={logoMedco} alt="Medco Energi" />
            <img src={logoTuvNord} alt="TUV Nord" />
            <img src={logoHk} alt="Hutama Karya" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;