import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChartsComponent } from './components/charts/charts.component';
import { MyplantsComponent } from './components/myplants/myplants.component';
import { PlantsComponent } from './components/plants/plants.component';
import { HomeComponent } from './components/home/home.component';
import { VisualizationComponent } from './components/visualization/visualization.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'myplants', component: MyplantsComponent},
  { path: 'visualization', component: VisualizationComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
