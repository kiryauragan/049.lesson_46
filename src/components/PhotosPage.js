import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function PhotosPage() {
  const [photos, setPhotos] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get('albumId');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: { albumId }
    })
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [albumId]);

  return (
    <div>
      <h1>Фото з альбому</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotosPage;
