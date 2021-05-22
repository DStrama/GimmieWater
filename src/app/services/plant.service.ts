import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PLANTS } from '../mock-plants';
import { Plant } from '../model/Plant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private apiUrl = 'http://localhost:5000/plants'

  constructor(private http:HttpClient) { }

  getPlants(): Observable<Plant[]> {
    // from HTTP REQUEST
    // return this.http.get<Plant[]>(this.apiUrl)
    const plants = of(PLANTS);
    return plants;
  }

  editPlant(plant: Plant) {

  }

  deletePlant(plant: Plant): Observable<Plant> {
    const url = `${this.apiUrl}/${plant.id}`;
    return this.http.delete<Plant>(url);
  }

  addTask(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(this.apiUrl, plant, httpOptions);
  }

}
