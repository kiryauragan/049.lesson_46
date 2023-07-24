import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import AlbumsPage from './components/AlbumsPage';
import PhotosPage from './components/PhotosPage';

function App() {
	return (
	  <Router>
		 <Routes>
			<Route path="/" element={<UsersPage />} />
			<Route path="/albums" element={<AlbumsPage />} />
			<Route path="/photos" element={<PhotosPage />} />
		 </Routes>
	  </Router>
	);
 }
 
 export default App;
