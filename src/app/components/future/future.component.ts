import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { DailyForecastService } from '../../services/daily-forecast.service';
import { pluck } from 'rxjs/operators';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  weatherData: any[] = [];
  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().pipe(
    pluck('list')
    )
    .subscribe(data=>{
      this.futureForecast(data)
    })
  }

  futureForecast(data:any){
    for(let i=0; i<data.length; i=i+8){
      this.weatherData.push(data[i]);
    }

    var day = [];
    var temperature = [];
    var rainNormalizedValue = [];
    var rainDay = [];

    for(let k=0; k<this.weatherData.length; k++){

        var date = new Date(this.weatherData[k].dt_txt);
        var month = date.getUTCMonth()+1;
        day.push(date.getUTCDate()+".0"+month);
        temperature.push(this.weatherData[k].main.temp);
        console.log(this.weatherData)

        if (this.weatherData[k].rain == null) { //Executes if variable is null OR undefined
          rainNormalizedValue.push(0);
          var temp = [];
          temp.push(date.getUTCDate()+".0"+month);
          temp.push(this.weatherData[k].pop*100+"%");
          rainDay.push(temp);
        }
        else{
          rainNormalizedValue.push(this.weatherData[k].rain["3h"]);
          var temp = [];
          temp.push(date.getUTCDate()+".0"+month);
          temp.push(100*Math.round(this.weatherData[k].pop * 100) / 100+"%");
          temp.push(this.weatherData[k].rain["3h"]+"mm/h");

          rainDay.push(temp);
        }
    }

    var parent = document.getElementById("chart2");
    this.createSensorChart(parent, "line" , "Temperature", day, temperature, "rgb(234, 101, 63)");
    this.createSensorChart(parent, "bar" , "Rain", rainDay, rainNormalizedValue, "rgb(36, 171, 242)");


  }


  createSensorChart(parent, type, name, day, value, color) {
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
          type: type,
           data: {
             labels: day,
             datasets: [
               {
                 label: name,
                 data: value,
                 fill: false,
                 borderColor: color,
                 backgroundColor: color
               }
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
         //return chartObj;
       }
}
