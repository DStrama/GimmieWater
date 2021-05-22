import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Plant } from '../../model/Plant';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  @Output() onAddPlant: EventEmitter<Plant> = new EventEmitter();
  name: string;
  selectedFile = null;
  title = 'google-maps';
  private map: google.maps.Map

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyAlSnSOCI4GOWxDClWY78Aln2_Sdg-GvhM'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement,{
        center: {
          lat: 51.233334, 
          lng: 	6.783333
        },
        zoom: 6
      })
    })
  }

  onFileSelected(event) {
    this.selectedFile = event.target.fils[0];
  }

  onUpload() {

  }



  onSubmit() {
    if(!this.name) {
      alert('Please enter name');
      return;
    }

    const newPlant = {

    }

    this.onAddPlant.emit(newPlant)

    this.name = '';

  }
}


