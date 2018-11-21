import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromState from '../state/app.state';
import * as stateActions from '../state/app.actions';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FireFilterPipe } from '../shared/pipes/filters/filter.pipe';
// import * as Faq from '../../assets/faq.json';
 
@Component({
  selector: 'app-inside-seo-page',
  templateUrl: './inside-seo-page.component.html',
  styleUrls: ['./inside-seo-page.component.css']
})
export class InsideSeoPageComponent implements OnInit {
  json$: Observable<any>;
  // faq$: Observable<any>;
  data: any;
  tutorReview: any [] = [];
  faqList: any [] = [];
  faq: any [] = [];
  imgUrl: any = 'assets/images/banner2.jpg';
  testBrowser: any;
  textTitle: any;
  imgWidth: any = 'row';
  city: any = 5;
  search: any;
  isMobile: any = false;
  pageName: any;
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
    if(location.path().split('/').length == 5){
      this.pageName = location.path().split('/')[4];
    } else {
      this.pageName = location.path().split('/')[3];
    }
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
        this.data = res;
        if (this.data) {
          let disData = [];
          this.textTitle = this.data.h1Des;
          for (let i = 1; i <= 10; i++) {
            let item = {};
            item['name'] = res["t" + i];
            item['desp'] = res["t" + i + 'Desp'];
            item['exp'] = res["t" + i + 'Exp'];
            item['url'] = res["t" + i + 'Url'];
            disData[i - 1] = item;
          }
          this.tutorReview = disData;
        }
      }
    })
  }

}
