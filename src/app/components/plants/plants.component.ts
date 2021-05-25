import { Component, OnInit } from '@angular/core';
import { PlantControllerService } from '../../services/plantController.service';
import { Plant } from '../../model/plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plants: Plant[] = [];

  constructor(private plantsService: PlantControllerService) { }

  ngOnInit(): void {
    this.plantsService.getPlantsUsingGET().subscribe(data => {
        this.plants = data;
    });
  }

  editPlant(plant: Plant) {
    console.log('sss');
  }

  deletePlant(plant: Plant) {
    console.log('sss');
    // this.plantsService.deletePlant(plant).subscribe( () => (this.plants = this.plants.filter( (p) => p.id !== plant.id )));
  }

  addPlant(plant: Plant) {
    console.log(plant)
    this.plantsService.createPlantUsingPOST(plant).subscribe( (plant) => this.plants.push(plant));
  }
}
