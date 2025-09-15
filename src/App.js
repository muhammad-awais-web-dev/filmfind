import './App.css';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import DummySearchResult from './pages/searchResult/DummySearchResult';
import { SearchProvider } from './SearchContext';


function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search-result' element={<DummySearchResult />}/>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
