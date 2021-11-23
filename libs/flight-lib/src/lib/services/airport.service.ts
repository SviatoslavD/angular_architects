import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AirportService {

  baseUrl = `http://www.angular.at/api`;

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<string[]> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const url = [this.baseUrl, 'airport'].join('/');
    return this.http.get<string[]>(url, { headers });
  }
}
