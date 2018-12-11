import { Component, OnInit, Input } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-banner-seo',
  templateUrl: './banner-seo.component.html',
  styleUrls: ['./banner-seo.component.scss']
})
export class BannerSeoComponent implements OnInit {

  @Input() imgUrl: any;
  @Input() title: any;
  @Input() city: any;
  testBrowser: boolean;
  innerWidth: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.testBrowser == true) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      if(width <= 600 ) {
        this.innerWidth = true;
      }
    }
  }

}
