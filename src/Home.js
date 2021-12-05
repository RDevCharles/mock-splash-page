import './App.css';
import BookingForm from './components/BookingForm';
import VisualQueue from './components/VisualQueue';

const Home = () => {
  return (
    <>
      <VisualQueue/>
      <button style={{marginTop:'2rem', backgroundColor:'red', border:0, height:'3rem', width:'8rem', borderRadius:'.2rem', color:'white', boxShadow: '1px 1px 7px black', position:'absolute', right:'1rem', top:'0rem' }}><h4>Connect Wallet</h4></button>
      
      <div className="main_container">
      
      

      
     
      <h3>Delivery Cost: $25 USD in AVAX</h3>
        

      
     
      <BookingForm/>
        
     
     
        
     
    </div>
    </>
   
  );
}

export default Home;
