import './App.css';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import DummySearchResult from './pages/searchResult/DummySearchResult';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  return (
    <>
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home setSearch={setSearch} />}/>
          <Route path='/search-result' element={<DummySearchResult search={search} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
