import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromState from '../state/app.state';
import * as stateActions from '../state/app.actions';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FireFilterPipe } from '../shared/pipes/filters/filter.pipe';

@Component({
  selector: 'app-seo-pages',
  templateUrl: './seo-pages.component.html',
  styleUrls: ['./seo-pages.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class SeoPagesComponent implements OnInit {

  json$: Observable<any>;
  data: any;
  imgUrl: any = 'assets/images/seo2.jpg';
  testBrowser: any;
  textTitle: any = 'Home Tuition in Bangalore';
  imgWidth: any = 'row';
  city: any = 5;
  search: any;
  isMobile: any = false;
  isBrowser: any = false;

  constructor(
    private store: Store<fromState.state>,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: string,
    private filter: FireFilterPipe
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.json$ = this.store.pipe(select(fromState.getJson)) as Observable<any>;
    this.store.dispatch(new stateActions.Load(location.path()));
  }

  ngOnInit() {
    if (this.testBrowser == true) {
      this.isBrowser = true;
      let width = window.innerWidth;

      if (width <= 800) {
        this.imgWidth = 'column';
        this.isMobile = true;
      }
    }
    this.json$.subscribe(res => {
      if (res != undefined) {
        console.log(res)
        this.data = res;
        if (this.data) {
          let disData = [];
          for (let i = 1; i <= 10; i++) {
            let item = {};
            item['name'] = res["t" + i];
            item['desp'] = res["t" + i + 'Desp'];
            item['exp'] = res["t" + i + 'Exp'];
            item['url'] = res["t" + i + 'Url'];
            disData[i - 1] = item;
          }
          this.data = disData;
        }
      }
    })
  }

}
