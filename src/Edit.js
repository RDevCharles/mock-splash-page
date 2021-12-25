import EditForm from './components/EditForm';


const Edit = () => {
    return (
      <>
       
        <div className="main_container">
          <h3 style={{ marginTop: "4rem" }}>
            Only Enter Details You Want To Change
          </h3>
          <h6>If you wish to cancel your shipment just type "cancel" and you will be refunded shortly.</h6>

          <EditForm />
        </div>
      </>
    );
}

export default Edit;