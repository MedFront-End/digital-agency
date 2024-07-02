
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Our from './Components/Our';
import About from './Components/About';
import Blog from './Components/Blog';
import Test from './Components/Test';
import Work from './Components/Work';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <div>
        <Navbar/>
      </div>

      <div id='home'>
        <Home/>
      </div>  

      <div id='services'>
        <Our/>
      </div>

       <div id='about'>
        <About/>
      </div>  

      <div id='blog'>
        <Blog/>
      </div> 

      <div>
        <Test/>
      </div> 

      <div>
        <Work/>
      </div> 
      
      <div>
        <Footer/>
      </div> 


   







    </div>
  );
}

export default App;
