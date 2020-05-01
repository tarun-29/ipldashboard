import React from "react";
import "./sessioncard.css";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js'
import batsmenData from "../store/batsmen";

function Batsmen({props}) {
  console.log("props")
  console.log(props)
  return (
    <div style={{ marginLeft: 40, marginRight: 20 }}>    
    <div>
      <div style={{ color: "#9DC183", fontSize: 40 }}>TOP 10 BATSMEN</div>
      <div>
        <Bar data={batsmenData.data} 
        height = {65}
        />
      </div>
    </div>
    </div>

  );
}

export default Batsmen;
