import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromState from '../../state/app.state';
import * as stateActions from '../../state/app.actions';
import { FireFilterPipe } from '../pipes/filters/filter.pipe';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as Faq from '../../../assets/faq.json';
import * as CryptoJS from 'crypto-js';
import * as _ from "lodash";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  @ViewChild("faqShow") show: ElementRef;
  // faq$: Observable<any>;
  allData: any [] = [];
  faqList: any [] = [];
  search: any;
  testBrowser: any;

  constructor(
    private store: Store<fromState.state>,
    private filter: FireFilterPipe,
    public renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: string) { 
    this.testBrowser = isPlatformBrowser(platformId);
    let data = <any>Faq;
    var len = Object.keys(data).length;
    for (let i = 0; i < len - 1; i++) {
      this.allData.push(data[i]);
      // this.faqList.push(data[i]);
    }
    // if(this.testBrowser) {
    //   let data = localStorage.getItem('CsquareEducation: Faq - ');
    //   let bytes = CryptoJS.AES.decrypt(data, 'secret key 123');
    //   this.allData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //   // this.faqList = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // }
  }

  ngOnInit() {
  }

  valuechange(){
    this.faqList = [];
    this.search = this.search.trim();
    if(this.search) {
      let words = this.search.split(" ");
      if(words.length == 1) {
        this.faqList = this.getFilterData(this.search);
      } else if ( words.length > 1) {
        words.forEach(element => {
          if(element != "" || element != " ") {
            let data = this.getFilterData(element);
            if(data.length) {
              data.forEach(ele => {
                this.faqList.push(ele);
              })
            }
          }
        });
        // this.faqList = this.filter.transform(data, )
      }
      // this.faqList = this.filter.transform(this.allData, this.search);
    } else  {
      this.faqList = [];
    }
  }

  getFilterData(item) {
    let data: any [] = [];
    data = this.filter.transform(this.allData, item);
    return data;
  }

  clear() {
    this.search = '';
    this.faqList = [];
  }

}
