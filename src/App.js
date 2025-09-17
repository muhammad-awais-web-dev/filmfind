import './App.css';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import DummySearchResult from './pages/searchResult/DummySearchResult';
import PreviewPageTv from './pages/preview/PreviewPageTv';
import PreviewPageMovie from './pages/preview/PreviewPageMovie';
import Peoples from './pages/peoples/Peoples';
import PersonDetail from './pages/peoples/PersonDetail';
import { SearchProvider } from './SearchContext';


function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search-result' element={<DummySearchResult />}/>
          <Route path='/preview/tvshow/:id' element={<PreviewPageTv />}/>
          <Route path='/preview/movie/:id' element={<PreviewPageMovie />}/>
          <Route path='/peoples' element={<Peoples />}/>
          <Route path='/person/:id' element={<PersonDetail />}/>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
