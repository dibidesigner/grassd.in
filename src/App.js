
import './App.css';
import Navbar from './Component/Navabar';
import Mainimage from './Component/Mainimage';
import Carorder from "./Component/Carorder";
import Offer from "./Component/Offer";



function App() {
  return (
    <>
      <Navbar />
      <Mainimage/>
      <div className='background'>
          <Carorder />
      </div>
      <Offer />
      
      
      
      
      
    </>
   
  );
}

export default App;
