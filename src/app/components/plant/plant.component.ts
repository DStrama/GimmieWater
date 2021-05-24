import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../../model/plant';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;
  @Output() onEditPlant: EventEmitter<Plant> = new EventEmitter()

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
    console.log(this.plant.sensor);
  }

  onEdit(plant) {
    this.onEditPlant.emit(plant);
  }

}
