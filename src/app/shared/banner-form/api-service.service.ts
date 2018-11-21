import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()

export class ApiService {
  constructor(private http: Http) { }

  getCity(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefCites/-1/-1`, options);
  }

  searchLocationByCity(city: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/searchLocationByCity/` + city, options);
  }

  getGrades(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefGrades`, options);
  }

  addLead(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/addLead`, data, options);
  }

  verifyPhone(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/generateLeadOTP`, data, options);
  }

  verifyOtp(data: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.serverUrl}/verifyLeadOTP`, data, options);
  }
  
}