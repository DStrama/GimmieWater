import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../model/Plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantsService: PlantService) { }

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe( (plants) => (
      this.plants = plants
    ));
  }

  editPlant(plant: Plant) {

  }

  deletePlant(plant: Plant) {
    this.plantsService.deletePlant(plant).subscribe( () => (this.plants = this.plants.filter( (p) => p.id !== plant.id )));
  }

  addPlant(plant: Plant) {
    this.plantsService.addTask(plant).subscribe((plant) => (this.plants.push(plant)));
  }
}
