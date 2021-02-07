import React from "react";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";

export default function MainCard(props) {
  const classes = useStyles();
  return (
    <div id="CardsDiv" className={classes.CardsDiv}>
      <Card className={classes.root}>
        <CardContent className={classes.data}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.country}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.city}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.description}
          </Typography>
          <Typography variant="h2" component="p">
            {props.tempNow}
          </Typography>
        </CardContent>
        <img className={classes.imgStyle} src={`https:${props.pickData}`} alt="" />
      </Card>
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to bottom, #56ccf2, #2f80ed)",
    color: "#d8e3db",
    boxShadow: " 0 0 30px #3f51b5",
    minWidth: "200px",
    maxWidth: "400px",
    width: "80%",
    borderRadius: "30px",
    marginTop: "20px"
  },
  CardsDiv: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px"
  },
  data: {
    width: "55%",
    float: "right"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  imgStyle: {
    width: "40%",
    minWidth: "100px",
    marginTop: "25px"
  }
});
