import React from 'react';
import API from "../../utils/axiosCalls";
import { Bar } from 'react-chartjs-2';

const state = {
    labels: [
        'Department of Health and Human Services',
        'Department of Defense',
        'Social Security Administration',
        'Department of the Treasury',
        'Department of Veterans Affairs',
        'Department of Agriculture',
        'Office of Personnel Management',
        'Department of Homeland Security',
        'Department of Education'
    ],
    datasets: [
        {
            label: 'Dollars',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [945677774172, 629424896012, 606454436574, 580584099932, 117104778676, 112715655815, 106956326872, 44143415056, 42402568825, 39180908739]
        }
    ]
}

class BarChart extends React.Component {
    componentDidMount() {
        API.getHomeAgencyInfo()
            .then(function (response) {
                const results = response.data.results;
                const data = [];
                const labels = [];

                for (var prop in results) {
                    var name = results[prop].name;
                    var amount = results[prop].gross_outlay_amount;
                    labels.push(name);
                    data.push(amount);
                }
                console.log(labels);

            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div style={{ width: 50 + "%" }}>
                < Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: '2020 Agency Budget',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    }
                    }
                />
            </div >
        );
    }
}

export default BarChart;