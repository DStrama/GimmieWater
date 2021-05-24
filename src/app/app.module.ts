import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import {HumidityControllerService} from './services/humidityController.service';
import { WeatherComponent } from './components/weather/weather.component';
import { TodayComponent } from './components/today/today.component';
import { FutureComponent } from './components/future/future.component'

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
    RegisterComponent,
    WeatherComponent,
    TodayComponent,
    FutureComponent
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
    ReactiveFormsModule
  ],
  providers: [HumidityControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
