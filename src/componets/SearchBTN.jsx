import React from "react";
import { makeStyles, Button } from "@material-ui/core";

export default function ContainedButtons() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      background: "none",
      borderRadius: "16px ",
      height: "55px",
      width: "25%",
      opacity: "0.8"
    }
  }
}));
