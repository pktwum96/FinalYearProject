import React from "react";
import {Doughnut} from 'react-chartjs-2';

class Doughnutchart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Stocks','Bonds','Mutual Funds','Treasury Bills'],
                datasets: [
                    {
                        label: 'percentage',
                        data: [
                            22,
                            10,
                            5,
                            8
                        ],
                        backgroundColor: [
                            'red',
                            'yellow',
                            'green',
                            'blue'
                        ]
                    }
                ]
            }
        }

    }

    render() {
        return (
            <div className="chart">
                <Doughnut
                    data={this.state.chartData}
                    width={100}
                    height={300}
                    options={{
                        maintainAspectRatio: false
                    }}
                    />
            </div>
        );
    }
}

export default Doughnutchart;
