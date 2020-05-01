import React from "react";
import "./sessioncard.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js";
import bowlerData from "../store/bowlers";
Chart.defaults.global.defaultFontColor = "orange";

function Bowler({match}) {
  return (
    <div style={{ marginLeft: 40, marginRight: 20 }}>
    <div>
        <div style={{ color: "#FFB6C1", fontSize: 40 }}>TOP 10 BATSMEN</div>
        <div>
          <Bar data={bowlerData.data} height={65} />
        </div>
    </div>
    </div>

  );
}

export default Bowler;
