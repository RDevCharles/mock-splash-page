import React from "react";
import "../App.css";
import { createClient } from "@supabase/supabase-js";
import Confirmation from "./Confirmation";

const supabaseUrl = "https://kppafefdfvjgesncmlpi.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const BookingForm = () => {
  const [pickup_address_, setPickupAddress] = React.useState("");
  const [dropoff_address_, setDropoffAddress] = React.useState("");
  const [pickup_time_, setPickupTime] = React.useState("");
  const [phone_number_, setPhoneNumber] = React.useState("");
  const [recipient_phone_number_, setRPhoneNumber] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("none");
  const [connected_wallet, setConnectedWallet] = React.useState(null);
  const [secret, setSecret] = React.useState("");
  const [alertColor, setAlertColor] = React.useState("");
  const [alertText, setAlertText] = React.useState("");

  const book_apex = async (e) => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = await accounts[0];

    setConnectedWallet(await account);
    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: process.env.REACT_APP_ADDY,
            value: "600000000000000",
          },
        ],
      })
      .then(async (e) => {
        e.preventDefault();
        await supabase.from("delivery_queue").insert([
          {
            pickup: pickup_address_,
            dropoff: dropoff_address_,
            pickup_time: pickup_time_,
            contact_number: phone_number_,
            r_number: recipient_phone_number_,
            id: `${
              pickup_address_.slice(0, 2) +
              pickup_address_.slice(0, 2) +
              recipient_phone_number_.slice(0, 1)
            }`,
          },
        ]);
        console.log("done");
        setConfirmation("block");
        setAlertText(
          "Please copy your secret code. You will need it to cancel or edit your delivery.Send this to your recipient in order to rekease your parcel.\n${secret}"
        );
        setAlertColor("Black");

        const showSecret = async () => {
          setTimeout( () => {
              setConfirmation("block");
              setSecret(
                `${
                  pickup_address_.slice(0, 2) +
                  pickup_address_.slice(0, 2) +
                  recipient_phone_number_.slice(0, 1)
                }`
              );
            
          }, 3000);
        };

        showSecret();
      })
      .catch((error) => {
        console.log(error);
       window.alert(error.message);
      });
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label for="appt">
          <h3>Shipping Info:</h3>
        </label>
        <div>
          <input
            placeholder="Pickup Address"
            onChange={(e) => {
              setPickupAddress(e.target.value);
            }}
            className="input_"
          ></input>

          <input
            placeholder="Dropoff Address"
            onChange={(e) => {
              setDropoffAddress(e.target.value);
            }}
            className="input_"
          ></input>
        </div>

        <div>
          <input
            placeholder="Contact Number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            className="input_"
          ></input>

          <input
            placeholder="Dropoff Phone Number"
            onChange={(e) => {
              setRPhoneNumber(e.target.value);
            }}
            className="input_"
          ></input>
        </div>
        <label for="appt">
          <h3>Pickup time:</h3>
        </label>
        <input
          onChange={(e) => {
            setPickupTime(e.target.value);
          }}
          className="input_"
          type="time"
          id="appt"
          name="appt"
        ></input>

        <a href="#">
          <p>By clicking confirm you agree to our terms and conditions.</p>
        </a>

        <button
          onClick={book_apex}
          style={{
            marginTop: "2rem",
            backgroundColor: "red  ",
            border: 0,
            height: "3rem",
            width: "8rem",
            borderRadius: ".2rem",
            color: "white",
            boxShadow: "1px 1px 7px black",
            cursor: "pointer",
          }}
        >
          <h4>Confirm Apex</h4>
        </button>
        <div style={{ display: `${confirmation}` }}>
          <Confirmation text={alertText} color={alertColor} />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
