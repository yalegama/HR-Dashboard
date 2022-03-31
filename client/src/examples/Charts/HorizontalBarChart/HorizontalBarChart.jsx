import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";



class HorizontalBarChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380,420,800,250]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 600
          },
          plotOptions: {
            bar: {
              borderRadius: 8,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: true
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany','United States', 'China', 'Germany'
            ],
          }
        },
      
      
      };
    }

  

  
        

  



      render() {
        return (
            <ReactApexChart 
            options={this.state.options} 
            series={this.state.series} 
            type="bar" 
            height={350} />
   
        );
      }
    }
    export default HorizontalBarChart;