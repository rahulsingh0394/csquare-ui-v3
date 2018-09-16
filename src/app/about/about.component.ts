import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imgWidth: any = 'row';
  testBrowser: any;
  gap: any;
  padding: any;
  box: any;
  imgUrl: any = 'assets/images/about-us-banner.png';
  textTitle: any = 'About Us';
  isMobile: any = false;
  isBrowser: any = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if(this.testBrowser == true){
      this.isBrowser = true;
      let  width = window.innerWidth;

      if(width <= 600){
        this.imgWidth = 'column';
        this.gap = 'mt-1';
        this.padding = 'p-1';
        this.box = 'pr-1';
      }
      if(width <=800) {
        this.isMobile = true;
      }
    }
  }

}
