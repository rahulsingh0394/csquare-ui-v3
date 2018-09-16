import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromState from '../state/app.state';
import * as stateActions from '../state/app.actions';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FireFilterPipe } from '../shared/pipes/filters/filter.pipe';

@Component({
  selector: 'app-inside-seo-page',
  templateUrl: './inside-seo-page.component.html',
  styleUrls: ['./inside-seo-page.component.css']
})
export class InsideSeoPageComponent implements OnInit {
  json$: Observable<any>;
  data: any;
  faqList: any [] = [];
  faq: any [] = [];
  imgUrl: any = 'assets/images/seo2.jpg';
  testBrowser: any;
  textTitle: any = 'Home Tuition in Bangalore';
  imgWidth: any = 'row';
  city: any = 5;
  readMore1: any = 'See More...';
  readMore2: any = 'See More...';
  readMore3: any = 'See More...';
  readMore4: any = 'See More...';
  readMore5: any = 'See More...';
  readMore6: any = 'See More...';
  search: any;

  constructor(
    private store: Store<fromState.state>,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: string,
    private filter: FireFilterPipe
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.json$ = this.store.pipe(select(fromState.getJson)) as Observable<any>;
    this.store.dispatch(new stateActions.Load(location.path()));
    this.store.dispatch(new stateActions.LoadFaq('/faq/CsquareEducation'));
  }

  ngOnInit() {
    if (this.testBrowser == true) {
      let width = window.innerWidth;

      if (width <= 800) {
        this.imgWidth = 'column';
      }
    }
    this.json$.subscribe(res => {
      if (res != undefined) {
        this.data = res.json;
        if (this.data) {
          let disData = [];
          for (let i = 1; i <= 10; i++) {
            let item = {};
            item['name'] = res.json["t" + i];
            item['desp'] = res.json["t" + i + 'Desp'];
            item['exp'] = res.json["t" + i + 'Exp'];
            item['url'] = res.json["t" + i + 'Url'];
            disData[i - 1] = item;
          }
          this.data = disData;
        }
       if(res.faq){
        res.faq.forEach(element => {
          this.faqList.push(element);
          this.faq.push(element);
        });
       }
      }
    })
  }

  valuechange(){
    this.faqList = this.filter.transform(this.faq, this.search);
  }

  changeButton(id: any) {
    if (id == '1') {
      if (this.readMore1 == 'See More...') {
        this.readMore1 = 'See Less...';
      } else {
        this.readMore1 = 'See More...';
      }
    } else if (id == '2') {
      if (this.readMore2 == 'See More...') {
        this.readMore2 = 'See Less...';
      } else {
        this.readMore2 = 'See More...';
      }
    } else if (id == '3') {
      if (this.readMore3 == 'See More...') {
        this.readMore3 = 'See Less...';
      } else {
        this.readMore3 = 'See More...';
      }
    } else if (id == '4') {
      if (this.readMore4 == 'See More...') {
        this.readMore4 = 'See Less...';
      } else {
        this.readMore4 = 'See More...';
      }
    } else if (id == '5') {
      if (this.readMore5 == 'See More...') {
        this.readMore5 = 'See Less...';
      } else {
        this.readMore5 = 'See More...';
      }
    } else if (id == '6') {
      if (this.readMore6 == 'See More...') {
        this.readMore6 = 'See Less...';
      } else {
        this.readMore6 = 'See More...';
      }
    }
  }

}
