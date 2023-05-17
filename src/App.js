import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hotels' element={<SearchResult />}></Route>
        <Route path='/hotels/:id' element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
