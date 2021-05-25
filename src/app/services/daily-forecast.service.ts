import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {

  constructor(private http: HttpClient) { }

  getWeatherForecast(){
      return new Observable((observer)=>{
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            observer.next(position)
          },
          (error)=>{
            observer.next(error)
          }
          )
        }).pipe(map((value:any)=>{
            return new HttpParams()
            //.set('lon', value.coords.longitude)
            //.set('lat', value.coords.latitude)
            .set('q', 'Warsaw,PL')
            .set('units', 'metric')
            .set('appid', 'd4320778fd27f0af56006f3d15a1f514')
            .set('cnt', '7')
          }),
          switchMap((values:any)=>{
            return this.http.get('https://api.openweathermap.org/data/2.5/forecast', {params: values})
          })
        )

    }


}
