
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Plant } from '../../model/plant';
import { Sensor } from '../../model/sensor';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  @Output() onAddPlant: EventEmitter<Plant> = new EventEmitter();

  locationChosen = false;
  name: string;
  sensorid: string;
  photourl: string;
  lng: number = 21.017532;
  lat: number = 52.237049;
  zoom: number = 15;
  showAddPlant: boolean;
  subscription: Subscription;
  selectedFile = null;
  title = 'google-maps';
  private map: google.maps.Map

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddPlant = value)
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if(!this.name) {
      alert('Please enter name');
      return;
    }

    const sensor: Sensor = {
      longitude: this.lng,
      latitude: this.lat,
      sensorId: this.sensorid
    };
    
    const newPlant: Plant = {
      name: this.name,
      sensor: sensor,
      photoUrl: this.photourl,
      plantId:  Math.floor(Math.random() * 16)
    };

    this.onAddPlant.emit(newPlant)

    this.name = '';
    this.lat = 52.237049;
    this.lng = 21.017532;
    this.locationChosen = false;
    this.sensorid = '';
  }

  onChoseLocation(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

}