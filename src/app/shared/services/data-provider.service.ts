import { Character } from './../models/character';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private _http: HttpClient) { }

  getCharacters(house:string) {
    return this._http
    .get<Character[]>(
      `${environment.herokuApiUrl}/house/${house}`
    )
    .pipe(
      map((data: Character[]) => {

       return data.map((item:Character):Character => {
          item.age = this.calculateAge(item.yearOfBirth);
          item.image = this.defaultImage(item.image);
          item.patronus = item.patronus!="" ? item.patronus : 'desconocido';
          item.name = item.name!="" ? item.name : 'desconocido';
          return item;
        });

      }),
      catchError((err) => {
        console.log('error', err);
        return throwError(err);
      })
    );
  }

  getTeachers() {
    return this._http
    .get<Character[]>(
      `${environment.herokuApiUrl}/staff`
    )
    .pipe(
      map((data: Character[]) => {

       return data.map((item:Character):Character => {
          item.age = this.calculateAge(item.yearOfBirth);
          item.image = this.defaultImage(item.image);
          item.patronus = item.patronus!="" ? item.patronus : 'desconocido';
          item.name = item.name!="" ? item.name : 'desconocido';
          return item;
        });

      }),
      catchError((err) => {
        console.log('error', err);
        return throwError(err);
      })
    );
  }

  getStudents(){
    return this._http
    .get<Character[]>(
      `${environment.herokuApiUrl}/students`
    )
    .pipe(
      map((data: Character[]) => {

       return data.map((item:Character):Character => {
          item.age = this.calculateAge(item.yearOfBirth);
          item.image = this.defaultImage(item.image);
          item.patronus = item.patronus!="" ? item.patronus : 'desconocido';
          item.name = item.name!="" ? item.name : 'desconocido';
          return item;
        });

      }),
      catchError((err) => {
        console.log('error', err);
        return throwError(err);
      })
    );
  }


  private calculateAge(yearOfBirth: number): number {
    if(!yearOfBirth)
      return 0;
    let currentYear = new Date().getFullYear();
    let age = currentYear - yearOfBirth;
    return age;
  }

  private defaultImage(image: string): string {
    return image!="" ? image : 'assets/images/default-image.png';
  }


}
