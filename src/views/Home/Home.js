import React from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./Home.module.css";
import data from "../../utils/data.json";
import Announcement from "./components/Announcement";
import Description from "./components/Description";
import RoundInput from "./components/RoundInput";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: null,
      description: "",
      email: "",
    };
  }

  componentDidMount = () => {
    this.getAnnouncement();
    this.getDescription();
  };

  getAnnouncement = () => {
    this.setState({
      announcement: data.announcement,
    });
  };

  getDescription = () => {
    this.setState({
      description: data.description,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    console.log("submitted email: ", this.state.email);
  };

  render() {
    return (
      <div className={classes.home}>
        <Logo />
        <div className={classes.main_img}></div>
        <div className={classes.main_content}>
          <Announcement announcement={this.state.announcement} />
          <Description description={this.state.description} />
          <div className={classes.responsive_margin}>
            <RoundInput
              value={this.state.email}
              name="email"
              placeholder="Email Address"
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
