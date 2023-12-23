import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "../../data/Data";
import "../../styles/chart.css";

function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ff0000",
          "#563457",
          "#222045",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });



  return (
    <div className="chart">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default Home;