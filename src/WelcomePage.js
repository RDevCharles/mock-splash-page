import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TopImage from "./components/assets/images/time.png";
import Twitter from "./components/assets/icons/Twitter Squared.png";
import YT from "./components/assets/icons/YouTube.png";
//uncomment to use these icons
//import Left from "./components/assets/icons/left.png";
//import Right from "./components/assets/icons/right.png";
import { Link } from "react-router-dom";
import AOS from "aos";

//initializing the AOS library
AOS.init();

const Home = () => {
  const [formDisplay, setFormDisplay] = React.useState("none");
  const [introDisplay, setIntroDisplay] = React.useState("block");
  const [imageShow, setImageShow] = React.useState("splash_image");
  const [bulletPointCounter, setBulletPointCounter] = React.useState(0);
  const [bulletDisplay, setBulletDisplay] = React.useState("bulletDisplayCSS");
  const [loginFadeState, setLoginFadeState] = React.useState("loginFadeUp");

  //as of now the slide show is deactivated and will only show bullet points [0].
  const bulletPoints = [
    {
      title: "Trade Options",
      li1: "Nulla vitae elit",
      li2: "a pharetra augue",
      li3: "mollis interdum vitgo",
    },
    {
      title: "Educational Videos",
      li1: "odio eu feugiat pretium nibh",
      li2: "turpis egestas integer",
      li3: "in ornare quam viverra",
    },
    {
      title: "Lifestyle Vlogs",
      li1: "at lectus urna duis",
      li2: "in hac habitasse platea dictumst",
      li3: "urna nunc id cursus",
    },
  ];

  //reveals the login form
  function showForm() {
    if (formDisplay == "none") {
      setFormDisplay("flex");
      setIntroDisplay("none");
      setLoginFadeState("loginFadeUp2");
    } else {
      setFormDisplay("none");
      setIntroDisplay("flex");
    }
  }

  //settimout to use fade out image
  React.useEffect(() => {
    setTimeout(() => {
      setImageShow("splash_image_fadeout");
      setBulletDisplay("bulletDisplay2");
    }, 5000);
  });

  //bullet point changing function

  /*React.useEffect(() => {
    setTimeout(() => {
      if (bulletPointCounter < 2) {
        setBulletPointCounter(bulletPointCounter + 1);
      } else {
        setBulletPointCounter(0);
      }
    }, 8000);
  });*/

  //main styles object
  const styles = {
    lists: {
      margin: "1rem 2rem",
      fontWeight: "bold",
      fontSize: "12px",
      
    },
    inputs: { marginTop: "2rem", borderTop: 0, borderLeft: 0, borderRight: 0, backgroundColor: "transparent" },
  };
  return (
    <div style={{ width: "100%", backgroundColor: "white", height: "100vh" }}>
      <NavBar />
      <div id='welcome-div-holder'>
        <div id='intro-left-div'
          style={{ display: introDisplay }}
        >
          <h2>euismod lacinia at quis. Risus sed odio.</h2>
          <h4 style={{ marginTop: "2rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt .
          </h4>
          <div id='welcome-page-login-div'>
            <a id='already-a-member'
              href={"/signup"}
            >
              Already a member? Sign up here.{" "}
            </a>
            <button onClick={showForm} id="btn" style={{ marginTop: "3rem" }}>
              Login
            </button>
          </div>
        </div>
        <form
          className={loginFadeState}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "8rem",
            zIndex:"3"
          }}
        >
          <input style={styles.inputs} placeholder="Email" />
          <input style={styles.inputs} placeholder="Password" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
            }}
          >
            <Link to="/signup">
              <label style={{ fontSize: "10px" }}>Not a member? Signup</label>
            </Link>
            <label style={{ fontSize: "10px" }}>Forgot login info</label>
          </div>
          <Link to="/home">
            <button id="btn" style={{ margin: "2rem 0rem" }}>
              Login
            </button>
          </Link>
        </form>
        <img
          id='welcome-page-image'
          data-aos="fade-right"
          data-aos-duration="2900"
          alt=""
          src={TopImage}
          className={imageShow}
        />

        <div
          className={bulletDisplay}
          id='bullet-id'
       
        >
          <h2 style={{ margin: "2rem 0rem 1rem 0rem" }}>
            {bulletPoints[bulletPointCounter].title}
          </h2>
          <ul style={{ position: "relative", right: "1rem" }}>
            <li style={{ marginBottom: "2rem" }}>
              {bulletPoints[bulletPointCounter].li1}
            </li>
            <li style={{ marginBottom: "2rem" }}>
              {bulletPoints[bulletPointCounter].li2}
            </li>
            <li> {bulletPoints[bulletPointCounter].li3}</li>
            <span>
              {/*<img className='arrow' onClick={() => {
                if (bulletPointCounter == 0) {
                  setBulletPointCounter(3)
                }
                else {
                  setBulletPointCounter(bulletPointCounter - 1)
                }
            }} style={{ width: '20px',marginTop: '2rem', marginRight:'2rem' }} src={Left} />
              <img className='arrow' onClick={() => {
                if (bulletPointCounter == 2) {
                  setBulletPointCounter(0)
                }
                else {
                  setBulletPointCounter(bulletPointCounter + 1)
                }
              }} style={{ width: '20px', marginTop: '2rem', marginLeft: '2rem' }} src={Right} />*/}
            </span>
          </ul>
          <a
            style={{ color: "white", fontSize: "12px", marginTop: "1rem" }}
            href="#"
          >
            click here to learn more{" "}
          </a>
        </div>
      </div>

      <div id='socials'>
        <img style={{ width: "1.4rem", marginRight: "1rem" }} src={Twitter} />
        <img style={{ width: "1.4rem" }} src={YT} />
      </div>
    </div>
  );
};

export default Home;
