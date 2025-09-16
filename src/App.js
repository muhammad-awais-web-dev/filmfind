import './App.css';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import DummySearchResult from './pages/searchResult/DummySearchResult';
import PreviewPageTv from './pages/preview/PreviewPageTv';
import PreviewPageMovie from './pages/preview/PreviewPageMovie';
import { SearchProvider } from './SearchContext';
import { PreviewProvider } from './PreviewContext';


function App() {
  return (
    <PreviewProvider>
      <SearchProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/search-result' element={<DummySearchResult />}/>
            <Route path='/preview/tvshow/:id' element={<PreviewPageTv />}/>
            <Route path='/preview/movie/:id' element={<PreviewPageMovie />}/>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </PreviewProvider>
  );
}

export default App;
