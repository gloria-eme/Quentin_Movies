import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


import  Home  from './pages/Home/Home';
import  Movies  from './pages/Movies/Movies';
import  Movie  from './pages/Movie/Movie';
import NotFound from './pages/NotFound';
import AddMovie from './pages/AddMovie/AddMovie';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element = {<App />}>
        <Route index element = {<Home />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/addMovie" element={<AddMovie />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
