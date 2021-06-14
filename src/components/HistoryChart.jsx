import React, { useRef, useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import Moment from "react-moment";
import { historyOptions } from "../chartConfigs/chartConfigs";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("7d");


  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      var time = new Date();
      time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
      console.log(time.toLocaleString('en-US', { hour: 'numeric', hour12: true }));
      var cur_hr = time.getHours();
      var nex_hr = cur_hr+1;
      

      var t_array = [];
      for(var i = 0; i<24;i++)
      {
        if (nex_hr == 25)
        {
          nex_hr = 0;
        }
        var old_nex_hr = nex_hr;
        var AmOrPm = nex_hr >= 12 ? 'pm' : 'am';
        nex_hr = (nex_hr % 12) || 12;
        var minutes = "00" ;
        var finalTime =  nex_hr + ":" + minutes + " " + AmOrPm; 
        
        t_array.push(finalTime);
        nex_hr = old_nex_hr+1;
      }

      var t_array1 = t_array;
      for(var i =0;i<6;i++)
      {
        t_array = t_array.concat(t_array1);
      }
      

      // console.log(t_array);
      // chartInstance.destroy();

      // var a = new Array(285).fill(0);
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: t_array,
          datasets: [
            {
              label: `${detail.name} price`,
              data: week,
              backgroundColor: "rgba(50, 305, 50, 0.5)",
              borderColor: "rgba(50, 305, 50, 0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
          lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 1.5,
          },

          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                type: "time",
                distribution: "linear",

              },
            ],
          },
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">${detail.current_price.toFixed(2)}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>

<p> Last 7 days market price.</p>
    </div>
  );
};

export default HistoryChart;
