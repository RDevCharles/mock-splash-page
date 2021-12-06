const PickupCard = () => {
  return (
    <div>
      <div style={{ display: "flex", margin: 0, padding: 0 }}>
        <div style={{margin:'2rem 1rem'}}>
          <h5>Pickup Address: 172 danbury Road</h5>
          <h5>Dropoff Address: Anywhere else</h5>
              </div>
              
        <div style={{margin:'2rem 1rem 0rem 1rem'}}>
          <h5>Pickup time: 2pm</h5>
                  <h5>Dropoff time: 3pm</h5>
                  
        </div>
              <h1 style={{ marginTop: '4rem' }}>25 Avax</h1>
              
      </div>
      <a href='#' style={{ backgroundColor: "red", position: "relative", bottom:'3rem'}}><h5>Accept</h5></a>
    </div>
  );
};

export default PickupCard;
