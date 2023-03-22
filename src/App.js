import './App.css';
import Home from './Components/Home/Home'
import Pricing from './Components/Home/Pricing/Pricing';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="bg-gray-800">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
