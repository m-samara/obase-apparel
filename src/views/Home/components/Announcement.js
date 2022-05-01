import React from "react";
import classes from "../Home.module.css";

const Announcement = (props) => {
  return <div className={classes.focused + " " + classes.responsive_margin}>{props.announcement}</div>;
};

export default Announcement;