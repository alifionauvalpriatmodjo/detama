// src/pages/Home.js
import React from 'react';
import './Home.css';

// Import gambar banner baru
import heroBanner from '../assets/hero-banner.png'; 

// Import images from assets folder
import inspectionImg from '../assets/inspection.jpg';
import engineeringImg from '../assets/engineering.jpg';
import ultrasonicImg from '../assets/ultrasonic.jpg';
import penetrantImg from '../assets/penetrant.jpg';
import magneticImg from '../assets/magnetic.jpg';
import radiographyImg from '../assets/radiography.jpg';
import part1 from '../assets/part-1.png';
import part2 from '../assets/part-2.png';
import part3 from '../assets/part-3.png';
import part4 from '../assets/part-4.png';
import part5 from '../assets/part-5.png';


const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
        <img src={heroBanner} alt="PT Detama Reka Utama Banner" className="hero-image" />
      </header>

      {/* Services Section */}
      <section className="home-section services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={inspectionImg} alt="Inspection" />
            <div className="card-content">
              <h3>INSPECTION</h3>
              <p>We provide independent
inspection services to assist our
clients, assuring that their
products, services, equipment
and facilities are in compliance
with national or international
requirements, standard, and
regulation.</p>
            </div>
          </div>
          <div className="service-card">
            <img src={engineeringImg} alt="Engineering Design" />
            <div className="card-content">
              <h3>ENGINEERING DESIGN</h3>
              <p>We offer development planning, concept
selection and design, TOR and SOW
development for project requirements,
and front-end engineering and design
(FEED) for Automation and SCADA
projects. Our capabilities and experience
help ensure rapid, configurable and
auditable transitions from the concept
stage to the realization stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Engineering Section */}
      <section className="home-section automation-section">
        <h3>The Automation Engineering Services as follow</h3>
        <div className="automation-list">
          <div className="automation-item">Design, Engineering, Installation and Commissioning of SCADA, 
PLC, DCS, HMI Design the System Architecture,
 Logix of SCADA, PLC ,RTU and DCS</div>
          <div className="automation-item">Design, Engineering, Installation and Commissioning of Historian and Process WebVisualization</div>
          <div className="automation-item">Design, Engineering, Installation and Commissioning of Automation Asset Management System</div>
        </div>
      </section>

      {/* --- UPDATED: Testing & Maintenance Section Sesuai Figma --- */}
      <section className="home-section testing-maintenance-section">
        <h3 className="tmc-main-title">TESTING, MAINTENANCE AND COMMISIONING</h3>
        <div className="tmc-content">
            <div className="tmc-column">
                <h4>Test & Commissioning</h4>
                <ul>
                    <li>Secondary Injection</li>
                    <li>Primary Injection</li>
                    <li>Hi-Pot Test</li>
                    <li>Stability Voltage</li>
                    <li>Megger Test</li>
                </ul>
            </div>
            <div className="tmc-divider"></div>
            <div className="tmc-column">
                <h4>Maintenance & Integration</h4>
                <ul>
                    <li>Medium Voltage</li>
                    <li>High Voltage</li>
                    <li>SCADA</li>
                    <li>HMI/SAS</li>
                    <li>RTU</li>
                    <li>Network with protocol <br /> IEC61850, DNP3</li>
                    <li>Modbas, T101, T103 & T104</li>
                </ul>
            </div>
        </div>
      </section>
      {/* --- Akhir Bagian yang Diupdate --- */}


      {/* Instrumentation Supply Section */}
      <section className="home-section instrumentation-section">
        <h3>INSTRUMENTATION PART SUPPLY</h3>
        <div className="parts-grid">
            <div className="part-item"><span>Transmitter (Pressure, Temp, Level, Flow)</span><img src={part1} alt="Transmitter" /></div>
            <div className="part-item"><span>Control Valve</span><img src={part2} alt="Control Valve" /></div>
            <div className="part-item"><span>Solenoid Valve</span><img src={part3} alt="Solenoid Valve" /></div>
            <div className="part-item"><span>Sensor PT 100 / RTD</span><img src={part4} alt="Sensor" /></div>
            <div className="part-item"><span>Pressure/Temp. Gauge</span><img src={part5} alt="Gauge" /></div>
        </div>
      </section>

      {/* NDT Section */}
      <section className="home-section ndt-section">
        <h3>NON DESTRUCTIVE TEST</h3>
        <div className="ndt-grid">
            <div className="ndt-item">
                <img src={ultrasonicImg} alt="Ultrasonic Testing"/>
                <p>Ultrasonic Testing</p>
            </div>
            <div className="ndt-item">
                <img src={penetrantImg} alt="Penetrant Testing"/>
                <p>Penetrant Testing</p>
            </div>
            <div className="ndt-item">
                <img src={magneticImg} alt="Magnetic Testing"/>
                <p>Magnetic Testing</p>
            </div>
            <div className="ndt-item">
                <img src={radiographyImg} alt="Radiography Test"/>
                <p>Radiography Test</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;