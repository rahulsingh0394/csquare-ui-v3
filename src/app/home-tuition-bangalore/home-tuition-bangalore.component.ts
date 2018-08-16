import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromState from '../state/app.state';
import * as stateActions from '../state/app.actions';

@Component({
  selector: 'app-home-tuition-bangalore',
  templateUrl: './home-tuition-bangalore.component.html',
  styleUrls: ['./home-tuition-bangalore.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class HomeTuitionBangaloreComponent implements OnInit {

  json$: Observable<any>;
  data: any;

  constructor(
    private store: Store<fromState.state>,
    private location: Location
  ) {
    this.json$ = this.store.pipe(select(fromState.getJson)) as Observable<any>;
    console.log(location.path);
    this.store.dispatch(new stateActions.Load(location.path()));
  }

  ngOnInit() {
    this.json$.subscribe(res => {
      if (res != undefined) {
        // res.json.forEach(element => {
        //   // if (element.url == this.location.path()) {
        //     this.data = element;
        //   // }
        // });
        console.log(res);
        this.data = res.json;
      }
    })
  }

}

