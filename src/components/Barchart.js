import React from "react";
var Chart = require("chart.js");

class Barchart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow","Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "# of Likes",
            data: [12, 19, 3,8,5,9],
            backgroundColor: [
              "rgba(255, 0, 0)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
                "rgba(255, 99, 132)",
                "rgba(54, 162, 235)",
                "rgba(255, 206, 86)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 400 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default Barchart;
