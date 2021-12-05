import React from 'react';
import '../App.css';
import { createClient } from '@supabase/supabase-js';
import Confirmation from './Confirmation';


const supabaseUrl = 'https://kppafefdfvjgesncmlpi.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


const CancelForm = () => {

  const [pickup_address_, setPickupAddress] = React.useState("");
  const [dropoff_address_, setDropoffAddress] = React.useState("");
  const [pickup_time_, setPickupTime] = React.useState("");
  const [phone_number_, setPhoneNumber] = React.useState("");
  const [recipient_phone_number_, setRPhoneNumber] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("none");
 
  const book_apex = async (e) => {
    e.preventDefault();
    await supabase
      .from('delivery_queue')
      .insert([
        { pickup: pickup_address_, dropoff: dropoff_address_, pickup_time: pickup_time_, contact_number: phone_number_, r_number:recipient_phone_number_ },
      ])
    console.log('done');
    setConfirmation('block');
  }

        
  return (
    <div >
       
      <form style={{
       
        display: 'flex',
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        
      }}>
        
      

       
        <input placeholder='Enter Secret Code' onChange={(e) => {
          setPickupAddress(e.target.value);
              }} className='input_'></input>

               <input placeholder='Enter Wallet Address' onChange={(e) => {
          setPickupAddress(e.target.value);
              }} className='input_'></input>
              
              
       
    
        <button onClick={book_apex} style={{ marginTop: '2rem', backgroundColor: 'red  ', border: 0, height: '3rem', width: '8rem', borderRadius: '.2rem', color: 'white', boxShadow: '1px 1px 7px black', cursor: 'pointer' }}><h4>Cancel Apex</h4></button>
        <div style={{display:`${confirmation}`}}>
        <Confirmation text='Your order has been cancelled. Your refund will process shortly'/>
        </div>
        </form>
        
     
    
    </div>
   
  );
}

export default CancelForm;
