import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../../model/Plant';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;
  @Output() onEditPlant: EventEmitter<Plant> = new EventEmitter()

  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(plant) {
    this.onEditPlant.emit(plant);
  }

}
