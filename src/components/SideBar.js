import { Link } from "react-router-dom";
import Emoji from 'a11y-react-emoji';
import Menu from './Menu';

const SideBar= () => {
return(
    <div className='queue'>
        <Link to='/'><h1 style={{marginTop:'10rem'}}><Emoji symbol="🔺" label="red triangle pointed up" />PEX</h1></Link>
        <Menu/>

    </div>
)
}

export default SideBar;