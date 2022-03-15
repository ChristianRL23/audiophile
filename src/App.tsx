import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Category from './layouts/Category/Category';
import Home from './layouts/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
}

export default App;
