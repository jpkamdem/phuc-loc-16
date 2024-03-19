import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  apiUrl = "http://localhost:3000/api/getboxes/"

  constructor(private http: HttpClient) { }

  getBoxes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
}