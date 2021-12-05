import { Routes, Route, Link } from "react-router-dom";
const QueueCard = () => {
    return(
        <div className='queue_card'>
    <h3 style={{marginTop:'3rem'}}>Drivers Available: 3</h3>
            <Link to='edit'><a href='#'><h3 style={{ marginTop: '2rem' }}>Change Delivery Details</h3></a></Link>
            <Link to='cancel'><a href='#'><h3 style={{ marginTop: '2rem' }}>Cancel Delivery</h3></a></Link>
            <a href='#'><h3 style={{marginTop:'2rem'}}>Discord</h3></a>
    <a href='#'><h3 style={{marginTop:'2rem'}}>About</h3></a>
    
        </div>
    )
    }
    
    export default QueueCard;