import React from "react";
import classes from "../Home.module.css";

const Description = (props) => {
  return <div className={classes.description + " " + classes.responsive_margin}>{props.description}</div>;
};

export default Description;