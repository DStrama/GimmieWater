import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  title = 'google-maps';

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBha0kMhq7UM-8n4YFqy71nYPmw86vypnY'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: {
          lat: 52.237049, 
          lng: 	21.017532
        },
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
      })
    })
  }

}
