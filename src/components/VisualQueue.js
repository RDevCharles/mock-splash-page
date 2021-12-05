import Emoji from 'a11y-react-emoji';
import QueueCard from '../components/QueueCard';

const VisualQueue = () => {
return(
    <div className='queue'>
        <h1 style={{marginTop:'10rem'}}><Emoji symbol="🔺" label="red triangle pointed up" />PEX</h1>
        <QueueCard/>

    </div>
)
}

export default VisualQueue;