import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  getBoxesUrl = 'http://localhost:3000/api/getboxes/';
  addToCartUrl = 'http://localhost:3000/api/cart/';

  constructor(private http: HttpClient) {}

  getBoxes(): Observable<any[]> {
    return this.http.get<any[]>(this.getBoxesUrl);
  }

  addToCart(id_box: number): Observable<any> {
    return this.http.post<any>(`${this.addToCartUrl}`, { id_box: id_box });
  }
}
