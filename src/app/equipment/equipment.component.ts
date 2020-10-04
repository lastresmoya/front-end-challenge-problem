import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { EquipmentItemComponent } from '../equipment-item/equipment-item.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {

  equipment: any;
  errorMessage: any;

  constructor(private http: HttpClient) {
    this.getEquipment()
    .subscribe((res: any) => {
      this.equipment = res;
      console.log(this.equipment);
    }, err => {
      console.log(err);
    });
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.errorMessage = error.error.message;
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEquipment(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/equipment`)
      .pipe(
        tap(equipment => console.log('fetched equipment')),
        catchError(this.handleError('getEquipment', []))
      );
  }


  ngOnInit() {
  }

}
