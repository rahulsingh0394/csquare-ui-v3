import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import * as Faq from '../assets/faq.json';
import * as AES from 'crypto-js/aes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  testBrowser: any;
  json$: Observable<any>;
  faqList: any [] = [];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
    if(this.testBrowser) {
      if(localStorage.getItem('CsquareEducation: Faq - ')) {

      } else {
        let data = <any>Faq;
        var len = Object.keys(data).length;
        for (let i = 0; i < len - 1; i++) {
          this.faqList.push(data[i]);
          var ciphertext = AES.encrypt(JSON.stringify(this.faqList), 'secret key 123');
          if(this.testBrowser) {
            localStorage.setItem("CsquareEducation: Faq - ", ciphertext);
          }
        }
      }
    }
  }

  ngOnInit() {
    if(this.testBrowser == true){
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
    window.scroll(0, 0);
    }
  }
}
