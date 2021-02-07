import React from "react";

export default function MainCard(props) {
  const imgStyle = {
    position: "absolute",
    left: "25%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width:"40%",
    minWidth:"120px"
  };
  let img = "";
  console.log(props.pickData);
  if (props.pickData === "Rain") {
    img = "/img/rain.png";
  } else if (props.pickData === "Clear") {
    img = "/img/sun.png";
  } else if (props.pickData === "Clouds") {
    img = "/img/sun-behind-cloud.png";
  }
  return <img style={imgStyle} src={img} alt=""></img>;
}
