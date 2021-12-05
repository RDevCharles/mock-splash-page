/*import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://kppafefdfvjgesncmlpi.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)




const confirm_apex = await supabase
  .from('delivery_queue')
  .insert([{dropoff_status: dropoff_status_ }], { upsert: true })


const update_apex = await supabase
  .from('delivery_queue')
  .insert([{ pickup: pickup_address_, dropoff: dropoff_address, pickup_time: pickup_time_, contact_number:phone_number}], { upsert: true })

const cancel_apex = await supabase
  .from('delivery_queue')
  .delete()
  .eq('secret_code', 'code that is typed')

const new_booking = supabase
  .from('delivery_queue')
  .on('INSERT', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()

const changed_booking = supabase
  .from('delivery_queue')
  .on('UPDATE', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()

const cancelled_booking = supabase
.from('delivery_queue')
.on('DELETE', payload => {
  console.log('Change received!', payload)
})
.subscribe()*/





