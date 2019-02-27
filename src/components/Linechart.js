import React from "react";
import {Line} from 'react-chartjs-2';

class Linechart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Stocks','Bonds','Mutual Funds','Treasury Bills'],
                datasets: [
                    {
                        label: 'Stock Price',
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
            <Line
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

export default Linechart;
