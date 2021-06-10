import { Component, OnInit } from '@angular/core';
import { DailyHumidity } from '../../model/dailyHumidity';
import { SensorHumidityOfHourlyHumidity } from '../../model/sensorHumidityOfHourlyHumidity';
import { SensorHumidityOfDailyHumidity } from '../../model/sensorHumidityOfDailyHumidity';
import { HumidityControllerService } from '../../services/humidityController.service';
import { Chart } from 'node_modules/chart.js';
import { HourlyHumidity } from '../../model/hourlyHumidity'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  humidity: SensorHumidityOfHourlyHumidity[]; //tutaj może Array ale nwm
  SENSORS_DATA: SensorHumidityOfHourlyHumidity[] = [];
  SENSORS_DATA_DAILY: SensorHumidityOfDailyHumidity[] = [];
  COLORS = [
    "rgb(75, 192, 192)",
    "rgb(213, 58, 152)",
    "rgb(42, 195, 152)",
    "rgb(254, 195, 71)",
    "rgb(15, 2, 71)",
  ];
   CHARTS_CONTAINER_NAME = ".charts-container";
   CHART_CANVAS_HEIGHT = 375;
   CHART_CANVAS_WIDTH = 700;
   state = {
     chartObjects: []
   };
   //chartsContainerElement = document.getElementById("charts-container");


   chartsInitHourly(parent, charts) {
     // For each chart create chart element in DOM according to its time and moisture
     return charts.map((chart, chartNumber) => {
       return this.createSensorChart(
         parent,
         "Hourly "+chart.sensorName,
         chart.time,
         chart.moisture,
         this.COLORS[chartNumber]
       );
     });
   }

      chartsInitDaily(parent, charts) {
        // For each chart create chart element in DOM according to its time and moisture
        return charts.map((chart, chartNumber) => {
          return this.createSensorChart(
            parent,
            "Daily "+chart.sensorName,
            chart.time,
            chart.moisture,
            this.COLORS[chartNumber]
          );
        });
      }

   createSensorChart(parent, name, time, moisture, color) {
     // Creating container div for the chart
     var chartContainerElement = document.createElement("div");
     chartContainerElement.className = "chart-container";

     // Creating chart canvas element which is used by Chart.js to draw our chart
     var chartCanvasElement = document.createElement("canvas");
     //chartCanvasElement.height = this.CHART_CANVAS_HEIGHT;
     //chartCanvasElement.width = this.CHART_CANVAS_WIDTH;
     chartContainerElement.style.cssText = "width: 500px;margin-left: 40px;margin-right: 40px;margin-bottom: 40px;";
     //te dwie linijki dodane
     //chartContainerElement.appendChild(chartCanvasElement);
     //parent.appendChild(chartContainerElement);

     // Creating actual chart with the help of Chart.js lib
     var chartObj = new Chart(chartCanvasElement.getContext("2d"), {
       type: "line",
       data: {
         labels: time,
         datasets: [
           {
             label: name,
             data: moisture,
             fill: false,
             borderColor: color,
           },
         ],
       },
       options: {
         scales: {
           yAxes: [
             {
               ticks: {
                 beginAtZero: false,
               },
             },
           ],
         },
       },
     });

     // Putting the elements into DOM (into charts-container)
     chartContainerElement.appendChild(chartCanvasElement);
     parent.appendChild(chartContainerElement);

     // Returning chart object from Chart.js
     return chartObj;
   }

  constructor(private humidityService: HumidityControllerService) {}
  //constructor() { }

  ngOnInit(): void {
    this.humidityService.getHourlyHumidityUsingGET().subscribe(data => {
    type MeasurementsList = {time: number[]; moisture: number[]; sensorName: string};
    var myArray: MeasurementsList[] = [];
    var chartsContainerElement = document.getElementById("charts-container");
    //chartsContainerElement.style.cssText = "display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center; margin-top: 40px;"

    for(let i=0; i< data.length; i++){
      this.SENSORS_DATA.push(data[i]);
      //console.log(data[i]!.humidityList);
      var measurements_smaller = [];
      var measurements_bigger = [];
      var time_smaller = [];
      var time_bigger = [];
      var measurements = [];
      var time = [];
      //var names = [];
      var d = new Date();
      var currentHour = d.getHours();

      for(let j=0; j<data[i]!.humidityList.length; j++){
        //console.log(data[i]!.humidityList[j].humidityAverage);
        if(data[i]!.humidityList[j].hour <= currentHour){
          measurements_smaller.push(data[i]!.humidityList[j].humidityAverage);
          time_smaller.push(data[i]!.humidityList[j].hour+":00");
        }
        else{
          measurements_bigger.push(data[i]!.humidityList[j].humidityAverage);
          time_bigger.push(data[i]!.humidityList[j].hour+":00");
        }
        //measurements.push(data[i]!.humidityList[j].humidityAverage);
        //time.push(data[i]!.humidityList[j].hour+":00");
        time = time_bigger.concat(time_smaller);
        measurements = measurements_bigger.concat(measurements_smaller);
      }

      myArray.push({time: time, moisture: measurements, sensorName: data[i]!.sensor.sensorId});
     // nameList.push(data[i]!.sensor.sensorId)
    }
    //console.log(myArray);
    //console.log(nameList);

    this.state.chartObjects = this.chartsInitHourly(chartsContainerElement, myArray);
    });

        this.humidityService.getDailyHumidityUsingGET().subscribe(data_daily => {
        type MeasurementsListDaily = {time: number[]; moisture: number[]; sensorName: string};
        var myArrayDaily: MeasurementsListDaily[] = [];
        var chartsContainerElement = document.getElementById("charts-container2");
        console.log(chartsContainerElement);

        for(let i=0; i< data_daily.length; i++){
          this.SENSORS_DATA_DAILY.push(data_daily[i]);
          //console.log(data[i]!.humidityList);
          var measurements = [];
          var time = [];

          for(let j=0; j<data_daily[i]!.humidityList.length; j++){
            //console.log(data[i]!.humidityList[j].humidityAverage);
            measurements.push(data_daily[i]!.humidityList[j].humidityAverage);
            time.push(data_daily[i]!.humidityList[j].day+".05");
          }

          myArrayDaily.push({time: time, moisture: measurements, sensorName: data_daily[i]!.sensor.sensorId});
        }

        this.state.chartObjects = this.chartsInitDaily(chartsContainerElement, myArrayDaily);
        });

  }



}
