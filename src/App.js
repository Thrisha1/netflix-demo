import './App.css';
import Navbar from "./Navbar"
import Hero from './components/Hero'

function App() {
  return (
    <div className="h-screen bg-black bg-opacity-75 bg-[url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')] bg-blend-darken" >
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
