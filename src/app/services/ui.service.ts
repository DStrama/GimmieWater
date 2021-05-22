import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddPlant: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddPlant(): void {
    this.showAddPlant = !this.showAddPlant
    this.subject.next(this.showAddPlant)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
