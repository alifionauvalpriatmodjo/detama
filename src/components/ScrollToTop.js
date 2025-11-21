// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Mengambil informasi URL saat ini
  const { pathname } = useLocation();

  useEffect(() => {
    // Setiap kali URL (pathname) berubah, geser window ke paling atas (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;