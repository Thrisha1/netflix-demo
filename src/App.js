import './App.css';
import Navbar from "./Navbar"
import Footer from './Footer.jsx';
import MainPage from './components/MainPage.jsx';
import Login from './components/Login.jsx';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Content from './components/Content.jsx';
import DisplayPage from './components/DisplayPage.jsx'
import AddMovie from './pages/Addmovie.jsx'

function App() {
  return (
    <div className="bg-black bg-opacity-75 bg-[url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')] bg-blend-darken" >
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/content' element={<Content/>} />
          <Route path="/display" element={<DisplayPage/>} />
          <Route path='/addmovies' element={<AddMovie/>} />
          
          
        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
