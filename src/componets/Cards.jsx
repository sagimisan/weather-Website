import React from "react";
import { CardContent, Typography, Card, makeStyles } from "@material-ui/core";

export default function Cards(props) {
  const classes = useStyles();
  return (
    <div className={classes.oldDaydDiv}>
      <Card className={classes.oldDays}>
        <CardContent>
          <Typography variant="h6" component="h2">
            {props.day}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.description}
          </Typography>
          <img src={`https:${props.img}`} />
          <Typography variant="h6" component="p" className={classes.temp}>
            {props.tempNow}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  oldDaydDiv: {
    display: "inline-block",
  },
  oldDays: {
    background: "hsla(0,0%,100%,.2)",
    color: "#d8e3db",
    minWidth: "200px",
    maxWidth: "400px",
    width: "80%",
    borderRadius: "30px",
    boxShadow: "0 0 0 "
  },
  title: {
    fontSize: 14
  }
});