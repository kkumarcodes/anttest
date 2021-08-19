import { rgbToHex } from "@material-ui/core";
import React, { useState } from "react";

const LinearProgress = (props) => {
  const { data } = props

  return (
    <div style={{height: "50px", display:"flex", flexDirection: "column"}}>
      <div style={{height: "10px", width: `${500*data.init}px`,  backgroundColor: "#ff0000"}} />
      <div style={{height: "10px", width: `${500*data.progress}px`,  backgroundColor: "#00ff00"}} />
      <div style={{height: "10px", width: `${500*data.calculated}px`,  backgroundColor: "#0000ff"}} />
    </div>
  );
};

export default LinearProgress;
