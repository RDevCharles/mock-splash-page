import { Link } from "react-router-dom";
import Emoji from 'a11y-react-emoji';
import QueueCard from '../components/QueueCard';

const VisualQueue = () => {
return(
    <div className='queue'>
        <Link to='/'><h1 style={{marginTop:'10rem'}}><Emoji symbol="🔺" label="red triangle pointed up" />PEX</h1></Link>
        <QueueCard/>

    </div>
)
}

export default VisualQueue;