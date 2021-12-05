const Confirmation = (props) => {
    return (
        <div style={{width:'16rem', height:'10rem', borderRadius:'.2rem',position:'absolute', backdropFilter: 'blur(24px)', backgroundColor: 'black' }}>
            <p style={{ marginTop: '3rem', color: 'white' }}>{props.text}</p>
    </div>
)
}

export default Confirmation;