import React, { useEffect, useState } from 'react';
import hygraphService from './Hygraph';

const Image = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const sliders = await hygraphService.getImage();
        setImages(sliders);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='image-container'>
    {images.map((slider) => (
      <div key={slider.id} className='image-item'>
        <img src={slider.image.url} alt={`Slider ${slider.id}`} className='image'/>
      </div>
    ))}
  </div>
  );
};

export default Image;
