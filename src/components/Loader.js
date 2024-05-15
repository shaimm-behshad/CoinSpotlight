import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loaderGif from '../assets/gifs/1.gif';
import './Loader.css'

function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const redirectTimer = setTimeout(() => {
        navigate('/parallax'); 
      }, 2000);

      return () => clearTimeout(redirectTimer); 
    }
  }, [isLoading, navigate]);

  return (
    <div style={{ display: isLoading ? 'block' : 'none' }} className='gif-con'>
      <img src={loaderGif} alt="Loading..." className='gif'/>
    </div>
  );
}

export default Loader;
