import React from 'react';
import '../App.css';
import { createClient } from '@supabase/supabase-js';
import Confirmation from './Confirmation';
import PickupCard from './PickupCard';


const supabaseUrl = 'https://kppafefdfvjgesncmlpi.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


const DriverFeed = () => {

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
              <PickupCard />
              <PickupCard />
              <PickupCard />
              <PickupCard />
              <PickupCard/>
      
  
       
        

  

       
        <div style={{display:`${confirmation}`}}>
        <Confirmation text='Your Delivery Was Booked. Check your text messages for your 4 digit secret code this will be needed to release your package.'/>
        </div>
        </form>
        
     
    
    </div>
   
  );
}

export default DriverFeed;
