import './App.css';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import SearchResult from './pages/searchResult/SearchResult';
import PreviewPageTv from './pages/preview/PreviewPageTv';
import PreviewPageMovie from './pages/preview/PreviewPageMovie';
import Peoples from './pages/peoples/Peoples';
import PersonDetail from './pages/peoples/PersonDetail';
import List from './pages/Lists/List';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search-result/:query/:page' element={<SearchResult />}/>
        <Route path='/preview/tvshow/:id' element={<PreviewPageTv />}/>
        <Route path='/preview/movie/:id' element={<PreviewPageMovie />}/>
        <Route path='/lists/:type/:list/:page' element={<List />}/>
        <Route path='/peoples' element={<Peoples />}/>
        <Route path='/person/:id' element={<PersonDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
