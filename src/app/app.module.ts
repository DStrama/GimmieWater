import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlantsComponent } from './components/plants/plants.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ButtonComponent } from './components/button/button.component';
import { MyplantsComponent } from './components/myplants/myplants.component';
import { PlantComponent } from './components/plant/plant.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlantsComponent,
    ChartsComponent,
    ScheduleComponent,
    AboutusComponent,
    ButtonComponent,
    MyplantsComponent,
    PlantComponent,
    ProgressBarComponent,
    AddPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
