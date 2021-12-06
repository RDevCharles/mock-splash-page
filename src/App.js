import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Edit from './Edit';
import Cancel from './Cancel';

function App() {

  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
  else {
    alert("please install MetaMask")
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/cancel" element={<Cancel/>} />
      
    </Routes>
    </div>
    
   
  );
}

export default App;
