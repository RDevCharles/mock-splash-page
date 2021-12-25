import React from "react";
import "./App.css";

import { createClient } from "@supabase/supabase-js";
import Confirmation from "./components/Confirmation";

const supabaseUrl = "https://kppafefdfvjgesncmlpi.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Signup = () => {
  // Password state changes
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signup = async () => {
    await supabase.auth.signIn({ email: email, password: password });
  };

  return (
    <div className="main_container">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8rem",
        }}
      >
        <label for="appt">
          <h3>Signup</h3>
        </label>

        <input
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="input_"
        ></input>

        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="input_"
        ></input>

        <button
          onClick={signup}
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
          <h4>Send Login Link</h4>
        </button>
      </form>
    </div>
  );
};

export default Signup;
