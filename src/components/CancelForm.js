import React from "react";
import "../App.css";
import { createClient } from "@supabase/supabase-js";
import Confirmation from "./Confirmation";

const supabaseUrl = "https://kppafefdfvjgesncmlpi.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const CancelForm = () => {
  const [pickup_address_, setPickupAddress] = React.useState("");

  const [secret_, setSecret] = React.useState("");
  const [addy, setAddy] = React.useState("");

  const [confirmation, setConfirmation] = React.useState("none");

  const get_connected_address = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = await accounts[0];

    setAddy(await account);
    console.log(addy);
  };

  const deletr = async (e) => {
    e.preventDefault();

    let data = await supabase.from("delivery_queue").delete().eq("id", addy);
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
        <input
          placeholder="Enter Secret Code"
          onChange={(e) => {
            setPickupAddress(e.target.value);
          }}
          className="input_"
        ></input>

        <button
          onClick={deletr}
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
          <h4>Cancel Apex</h4>
        </button>
        <div style={{ display: `${confirmation}` }}>
          <Confirmation text="Your order has been cancelled. Your refund will process shortly" />
        </div>
      </form>
    </div>
  );
};

export default CancelForm;
