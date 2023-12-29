import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Myhome/Home';
import AllRecepies from './Components/AllRecepies/AllRecepies';
import RecepyDetail from './Components/RecepyDetail/RecepyDetail';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AllRecepies' element={<AllRecepies />} />
          <Route path='/RecepyDetail' element={<RecepyDetail />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
