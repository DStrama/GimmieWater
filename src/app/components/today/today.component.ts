import { Component, OnInit} from '@angular/core';
import { ForecastService } from '../../services/forecast.service'
import { Chart } from 'node_modules/chart.js';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit{
  @ViewChild('chart') myDiv: ElementRef;
  timeline = [];
  weatherNow: any;
  currentTime = new Date();
  location: any;

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().subscribe(data=>{
    this.getTodayForecast(data)
    })

  }

  dateRange(){
    const start = new Date();
    const to = new Date(start);
    to.setHours(to.getHours()+2, to.getMinutes() + 59, to.getSeconds() +59);
    return { start, to }
  }

  getTodayForecast(today:any){
    this.location = today.city;
    type MeasurementsList = {time: Date[]; temperature: number[]};
    var myArray: MeasurementsList[] = [];


    for(const forecast of today.list.slice(0,8)){
      this.timeline.push({
        time: forecast.dt_txt,
        temp: forecast.main.temp,
        pop: forecast.pop
    });

    const apiDate = new Date(forecast.dt_txt).getTime();


    if(this.dateRange().start.getTime() <= apiDate && this.dateRange().to.getTime() >= apiDate)
      this.weatherNow = forecast;
      console.log(this.weatherNow);
    }

    var time = [];
    var temperature = [];
    var rainNormalizedValue = [];
    var rainDay = [];

    for(let k=0; k<today.list.slice(0,7).length; k++){
        var date = new Date(today.list.slice(0,7)[k].dt_txt);
        var hour = date.getHours();
        //var day = date.getDate();
        time.push(hour+":00");
        temperature.push(today.list.slice(0,7)[k].main.temp);
        console.log(today.list.slice(0,7))

                if (today.list.slice(0,7)[k].rain == null) { //Executes if variable is null OR undefined
                  rainNormalizedValue.push(0);
                  var temp = [];
                  temp.push(hour+":00");
                  temp.push(today.list.slice(0,7)[k].pop*100+"%");
                  rainDay.push(temp);
                }
                else{
                  rainNormalizedValue.push(today.list.slice(0,7)[k].rain["3h"]);
                  var temp = [];
                  temp.push(hour+":00");
                  temp.push(today.list.slice(0,7)[k].pop*100+"%");
                  temp.push(today.list.slice(0,7)[k].rain["3h"]+"mm/h");
                  rainDay.push(temp);
                }
    }
    var parent = document.getElementById("chart");
    this.createSensorChart(parent,'line' , 'Temperature', time, temperature, "rgb(234, 101, 63)");
    this.createSensorChart(parent, "bar" , "Rain", rainDay, rainNormalizedValue, "rgb(36, 171, 242)");
  }

     createSensorChart(parent, type, name, time, value, color) {
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
           labels: time,
           datasets: [
             {
               label: name,
               data: value,
               fill: false,
               borderColor: color,
               backgroundColor: color
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
       //return chartObj;
     }

}
