import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums', {
      params: { userId }
    })
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [userId]);

  return (
    <div>
      <h1>Список альбомів</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
            <Link to={`/photos?albumId=${album.id}`}>Фото</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumsPage;
