// src/pages/Projects.js
import React, { useState } from 'react';
import './Projects.css';

/* =========================================
   IMPORT GAMBAR (Pastikan file ada di assets)
   ========================================= */

// 1. GI Jampang Kulon
import jampangCover from '../assets/jampang.jpg';
import jampang1 from '../assets/jampang1.jpg';
import jampang2 from '../assets/jampang2.jpg';
import jampang3 from '../assets/jampang3.jpg';
import jampang4 from '../assets/jampang4.jpg';
import jampang5 from '../assets/jampang5.jpg';

// 2. GI Cikupa
import cikupaCover from '../assets/cikupa.jpg';
import cikupa1 from '../assets/cikupa1.jpg';
import cikupa2 from '../assets/cikupa2.jpg';
import cikupa3 from '../assets/cikupa3.jpg';
import cikupa4 from '../assets/cikupa4.jpg';
import cikupa5 from '../assets/cikupa5.jpg';

// 3. GI Lautan Steel Indonesia
import lsiCover from '../assets/lsi.jpg';
import lsi1 from '../assets/lsi1.jpg';
import lsi2 from '../assets/lsi2.jpg';
import lsi3 from '../assets/lsi3.jpg';
import lsi4 from '../assets/lsi4.jpg';
import lsi5 from '../assets/lsi5.jpg';

// 4, 5, 6. Another Projects
import anotherCover1 from '../assets/anotherproject1.jpg';
import anotherCover2 from '../assets/anotherproject2.jpg';
import anotherCover3 from '../assets/anotherproject3.jpg';
import anotherIsi from '../assets/anotherprojectisi.jpg'; // Satu foto untuk isi

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Data Projects dengan Gallery masing-masing
  const projectList = [
    {
      id: 1,
      name: 'GI Jampang Kulon',
      image: jampangCover, // Foto Cover
      gallery: [jampang1, jampang2, jampang3, jampang4, jampang5], // Foto Isi (Slider)
      description: {
        title: 'Project Scope of Work',
        tasks: [
          'Description 1',
          'Description 2',
          'Description 3',
          'Description 4',
          'Description 5'
        ]
      }
    },
    {
      id: 2,
      name: 'GI Cikupa',
      image: cikupaCover,
      gallery: [cikupa1, cikupa2, cikupa3, cikupa4, cikupa5],
      description: {
        title: 'Project Scope of Work',
        tasks: [
          'Description 1',
          'Description 2',
          'Description 3',
          'Description 4',
          'Description 5'
        ]
      }
    },
    {
      id: 3,
      name: 'GI Lautan Steel Indonesia',
      image: lsiCover,
      gallery: [lsi1, lsi2, lsi3, lsi4, lsi5],
      description: {
        title: 'Project Scope of Work',
        tasks: [
          'Description 1',
          'Description 2',
          'Description 3',
          'Description 4',
          'Description 5'
        ]
      }
    },
    {
      id: 4,
      name: 'Another Project 1',
      image: anotherCover1,
      gallery: [anotherIsi], 
      description: {
        title: 'Project Scope of Work',
        tasks: [
          'Description 1',
          'Description 2',
          'Description 3',
          'Description 4',
          'Description 5'
        ]
      }
    },
    {
      id: 5,
      name: 'Another Project 2',
      image: anotherCover2,
      gallery: [anotherIsi],
      description: {
        title: 'Project Scope of Work',
        tasks: [
          'Description 1',
          'Description 2',
          'Description 3',
          'Description 4',
          'Description 5'
        ]
      }
    },
    {
      id: 6,
      name: 'Another Project 3',
      image: anotherCover3,
      gallery: [anotherIsi],
      description: {
        title: 'Project Scope of Work',
        tasks: [
          'Description 1',
          'Description 2',
          'Description 3',
          'Description 4',
          'Description 5'
        ]
      }
    }
  ];

  // Menentukan gambar mana yang sedang aktif (berdasarkan project yg dipilih)
  const activeSlides = selectedProject ? selectedProject.gallery : [];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Fungsi Navigasi Manual (Next)
  const nextSlide = (e) => {
    e.stopPropagation();
    if (activeSlides.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % activeSlides.length
      );
    }
  };

  // Fungsi Navigasi Manual (Previous)
  const prevSlide = (e) => {
    e.stopPropagation();
    if (activeSlides.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? activeSlides.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1>Our Projects</h1>
        </div>

        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                {/* Menggunakan Image Cover */}
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <button
                  className="more-info-button"
                  onClick={() => openModal(project)}
                >
                  More Information
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
            <h2 className="modal-title">{selectedProject.name}</h2>

            {/* CONTAINER BODY MODAL (Flexbox) */}
            <div className="modal-body">
              
              {/* KOLOM KIRI: GAMBAR */}
              <div className="modal-left">
                <div className="modal-image-carousel">
                  {/* Tampilkan Arrow HANYA jika gambar lebih dari 1 */}
                  {activeSlides.length > 1 && (
                    <button className="carousel-arrow left" onClick={prevSlide}>
                      &#10094;
                    </button>
                  )}

                  {activeSlides.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                    />
                  ))}

                  {/* Tampilkan Arrow HANYA jika gambar lebih dari 1 */}
                  {activeSlides.length > 1 && (
                    <button className="carousel-arrow right" onClick={nextSlide}>
                      &#10095;
                    </button>
                  )}
                </div>
              </div>

              {/* KOLOM KANAN: DESKRIPSI */}
              <div className="modal-right">
                <div className="modal-description">
                  <h4>{selectedProject.description.title}</h4>
                  <ul>
                    {selectedProject.description.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;