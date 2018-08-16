import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()


export class AppService {
    constructor(private http: Http) {}

    getJson(data: any): Observable<any> {
        console.log(data);
        return this.http.get('https://csquareeducation.co.in/json'+data+'.json');
    }
}
