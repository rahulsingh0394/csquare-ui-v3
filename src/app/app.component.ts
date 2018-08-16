import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store, select } from '@ngrx/store';
import * as fromState from './state/app.state';
import * as stateActions from './state/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  testBrowser: any;
  json$: Observable<any>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private store: Store<fromState.state>
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // this.json$ = this.store.pipe(select(fromState.getJson)) as Observable<any>;
    // this.store.dispatch(new stateActions.Load());
  }
}
