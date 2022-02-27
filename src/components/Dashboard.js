import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";

const Dashboard = (props) => {
  const [token_value, setTokenValue] = React.useState(1);
  const decimal_ammount = 10000000;
  const [post, setPost] = React.useState("");

  // replace with context provider from main app.js
  //making a post on dashboard
  /*async function postr() {
    await supabase
      .from("posts_0x1DDade6675FDeF16b5E9ed3F95e01B9270e149aE")
      .insert([{ post: post }]);
  }*/

  //state change for post inbox
  // const post_state = (e) => {
  //   e.preventDefault();
  //   setPost(e.target.value);
  // };

  //state change for amount inbox
  // const state_change = (e) => {
  //   e.preventDefault();
  //   setTokenValue(e.target.value * decimal_ammount);
  // };

  //state change for post inbox
  //getting the primary wallet
  //sending transaction

  // const book = async (e) => {
  //   e.preventDefault();
  //   setTokenValue(e.target.value * decimal_ammount);
  //   const accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   const account = await accounts[0];

  //   window.ethereum
  //     .request({
  //       method: "eth_sendTransaction",
  //       params: [
  //         {
  //           from: account,
  //           to: process.env.REACT_APP_ADDY,
  //           value: String(token_value * decimal_ammount),
  //         },
  //       ],
  //     })
  //     .then(postr())
  //     .catch((err) => console.log(err.message));
  //   window.location.reload();
  // };

  const styles = {
    lists: {
      margin: "1rem 2rem",
      fontWeight: "bold",
      fontSize: "12px",
    },
  };

  return (
    <>
      <h4 style={{ marginTop: "2rem" }}>Crypto|Fiat</h4>
    <div
      style={{
        width: "50vw",
        height: "auto",
        boxShadow: "1px 3px 7px grey",
        borderRadius: ".5rem",
        marginTop: "2rem",
      }}
    >
      {
        //add moving under line
      }
      
      <div>
        <ul style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid #a8a8a83a"}}>
          <li style={styles.lists}>
            <p>SYMBOL</p>
          </li>
          <li style={styles.lists}>
            <p>ENTRY DATE</p>
          </li>
          <li style={styles.lists}>
            <p>ENTRY PRICE</p>
          </li>
          <li style={styles.lists}>
            <p>EXIT DATE</p>
          </li>
          <li style={styles.lists}>
            <p>EXIT PRICE</p>
          </li>
          <li style={styles.lists}>
            <p>PROFITS</p>
          </li>
        </ul>

        <div>
          <ul
            style={{
              textAlign: "left",
              marginLeft: "3.1rem",
              color: "white",
              paddingBottom: "2rem",
            }}
          >
            {props.li}
          </ul>
        </div>
      </div>
      </div>
      </>
  );
};

export default Dashboard;
