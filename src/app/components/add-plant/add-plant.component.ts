import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Plant } from '../../model/Plant';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  @Output() onAddPlant: EventEmitter<Plant> = new EventEmitter();

  name: string;
  sensorid: string;
  photo: File;
  log: number;
  lat: number;
  showAddPlant: boolean;
  subscription: Subscription;

  selectedFile = null;
  title = 'google-maps';
  private map: google.maps.Map

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddPlant = value)
  }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyD6bI619ccwd2nsQDKghzNZeagZLa01-LE'
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

  onFileSelected(event) {
    this.photo = event.target.fils[0];
  }

  onUpload() {

  }

  onSubmit() {
    if(!this.name) {
      alert('Please enter name');
      return;
    }

    const newPlant = {
      name: this.name,
      sensorId: this.sensorid,
      log: this.log,
      lat: this.lat,
      photo: this.photo
    };

    this.onAddPlant.emit(newPlant)

    this.name = '';
    this.lat = 0.0;
    this.lat = 0.0;
    // this.photo = null;

  }
}


