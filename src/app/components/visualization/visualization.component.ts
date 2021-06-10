import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { PlantControllerService } from '../../services/plantController.service';
import { Plant } from '../../model/plant';

class Coordinate {
  latitude: number;
  longitude: number;
  text: string;

  constructor(lat, lng, text) {
      this.latitude = lat;
      this.longitude = lng;
      this.text = text;
  }
}

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  plants: Plant[] = [];

  title = 'google-maps';
  lng: number = 21.000981;
  lat: number = 52.211840;
  zoom: number = 17;
  // iconUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LACMTA_Circle_Red_Line.svg/600px-LACMTA_Circle_Red_Line.svg.png';

  constructor(private plantsService: PlantControllerService) { }

  ngOnInit(): void {
    this.plantsService.getPlantsUsingGET().subscribe(data => {
        this.plants = data;
    });
  }
}
