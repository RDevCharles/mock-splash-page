import React from "react";
import "../App.css";
import { createClient } from "@supabase/supabase-js";
import Confirmation from "./Confirmation";

const supabaseUrl = "https://kppafefdfvjgesncmlpi.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const EditForm = () => {
  const [secret_, setSecret] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("none");

  const updatr = async () => {
    let data = await supabase
      .from("delivery_queue")
      .update({ notes: notes })
      .eq("id", secret_);

    console.log(data.data[0].id);
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

        <input
          placeholder="Enter Secret Code"
          onChange={(e) => {
            setSecret(e.target.value);
          }}
          className="input_"
        ></input>

        <input
          type="text"
          placeholder="Details you want to change"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          className="input_"
        ></input>

        <button
          onClick={updatr}
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
          <h4>Confirm Change</h4>
        </button>

        <div style={{ display: `${confirmation}` }}>
          <Confirmation text="Your order has been changed an driver will be notified." />
        </div>
        <div style={{ display: `${confirmation}` }}>
          <Confirmation text="Your order has been changed an driver will be notified." />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
