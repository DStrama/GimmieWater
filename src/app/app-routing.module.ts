import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ChartsComponent } from './components/charts/charts.component';
import { MyplantsComponent } from './components/myplants/myplants.component';
import { PlantsComponent } from './components/plants/plants.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  { path: 'myplants', component: MyplantsComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'charts', component: ChartsComponent },
  { path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
