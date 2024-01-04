import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Myhome/Home';
import AllRecepies from './Components/AllRecepies/AllRecepies';
import RecepyDetail from './Components/RecepyDetail/RecepyDetail';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import AddRecipe from './Components/Recipes/AddRecipe';

library.add(fab);

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Menu' element={<AllRecepies />} />
          <Route path='/recepy_detail/:id' element={<RecepyDetail />} />
          <Route path='/add-product' element={<AddRecipe />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
