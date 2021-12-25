import { Link } from "react-router-dom";
const Menu = () => {
    return(
        <div className='queue_card'>
            <Link to='edit'><a href='#'><h3 style={{ marginTop: '2rem' }}>Edit Delivery</h3></a></Link>
            <a href='https://discord.gg/CFD9zC4pKB'><h3 style={{marginTop:'2rem'}}>Discord</h3></a>
            <a href='https://www.gitbook.com/?utm_source=content&utm_medium=trademark&utm_campaign=-MV4hwONledQK5nEDaUc-887967055'><h3 style={{ marginTop: '2rem' }}>About</h3></a>
            {/*<Link to='login'><a href='#'><h3>Driver Login</h3></a></Link>*/}
    
        </div>
    )
    }
    
    export default Menu;