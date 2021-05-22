import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-myplants',
  templateUrl: './myplants.component.html',
  styleUrls: ['./myplants.component.css']
})
export class MyplantsComponent implements OnInit {
  showAddPlant: boolean;
  subscription: Subscription;

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddPlant = value)
  }

  ngOnInit(): void {
  }

  toggleAddPlant() {
    this.uiService.toggleAddPlant();
  }

}
