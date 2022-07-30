import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BooksList from './components/BooksList';
import Catagories from './components/Categories';
import Navigation from './components/Navigation';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<BooksList />} />
          <Route exact path="/Catagories" element={<Catagories />} />
          <Route exact path="/AddBook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
