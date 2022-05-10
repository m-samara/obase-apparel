import React, {useState} from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./Home.module.css";
import data from "../../utils/data.json";
import Announcement from "./components/Announcement";
import Description from "./components/Description";
import RoundInput from "./components/RoundInput";

const Home = (props) => {
  const [email,setEmail] = useState("");


  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log("submitted email: ", email);
  };
    return (
      <div className={classes.home}>
        <Logo />
        <div className={classes.main_img}></div>
        <div className={classes.main_content}>
          <Announcement announcement={data.announcement} />
          <Description description={data.description} />
          <div className={classes.responsive_margin}>
            <RoundInput
              value={email}
              name="email"
              placeholder="Email Address"
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    );

}

export default Home;