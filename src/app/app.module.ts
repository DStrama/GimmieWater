import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlantsComponent } from './components/plants/plants.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ButtonComponent } from './components/button/button.component';
import { MyplantsComponent } from './components/myplants/myplants.component';
import { PlantComponent } from './components/plant/plant.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { RegisterComponent } from './components/register/register.component';
import { HumidityControllerService } from './services/humidityController.service';
import { PlantControllerService } from './services/plantController.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlantsComponent,
    ChartsComponent,
    ButtonComponent,
    MyplantsComponent,
    PlantComponent,
    ProgressBarComponent,
    AddPlantComponent,
    HomeComponent,
    LoginComponent,
    VisualizationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDZdP0G-7cHR0vRMtYudeqLu02qcUSyDI'
    })
  ],
  providers: [HumidityControllerService, PlantControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
