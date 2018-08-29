import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NguCarousel } from '@ngu/carousel';
import { TweenMax, Bounce, Elastic, Power2 } from "gsap";
import { ScrollToService } from 'ng2-scroll-to-el';
import { BannerFormService } from '../banner-form/banner-form.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public carouselOne: NguCarousel;
  testBrowser: boolean;
  mainButton: any = 'Click here to get a free demo class (Only For Student/Parent)';

  constructor(
    private scrollService: ScrollToService,
    private dialog: BannerFormService,
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.testBrowser == true) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      if(width <= 600 ) {
        this.mainButton = 'Get A Free Demo Class (For Student/Parent)'
      }
     // TweenMax.from(document.getElementById("main"), 2, { opacity: 0 });
      TweenMax.from(document.getElementById("1"), 2, { y: -1200, rotation: 90, ease: Power2.easeOut });
      TweenMax.from(document.getElementById("2"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .1 });
      TweenMax.from(document.getElementById("3"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .2 });
      TweenMax.from(document.getElementById("4"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .3 });
      TweenMax.from(document.getElementById("5"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .4 });
      TweenMax.from(document.getElementById("6"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .5 });
      TweenMax.from(document.getElementById("7"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .6 });
      TweenMax.from(document.getElementById("8"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .7 });
      TweenMax.from(document.getElementById("9"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .8 });
      TweenMax.from(document.getElementById("10"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .9 });
      TweenMax.from(document.getElementById("11"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.0 });
      TweenMax.from(document.getElementById("12"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.1 });
      TweenMax.from(document.getElementById("13"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.2 });
      TweenMax.from(document.getElementById("14"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.3 });
      TweenMax.from(document.getElementById("15"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.4 });
      TweenMax.from(document.getElementById("16"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.5 });
      TweenMax.from(document.getElementById("17"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.6 });
      TweenMax.from(document.getElementById("18"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.7 });
      TweenMax.from(document.getElementById("19"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.8 });
      TweenMax.from(document.getElementById("20"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.9 });
      TweenMax.from(document.getElementById("21"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2 });
      TweenMax.from(document.getElementById("22"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.1 });
      TweenMax.from(document.getElementById("23"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.2 });
      TweenMax.from(document.getElementById("24"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.3 });
      TweenMax.from(document.getElementById("25"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.4 });
      TweenMax.from(document.getElementById("26"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.5 });
      TweenMax.from(document.getElementById("27"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.6 });
      TweenMax.from(document.getElementById("28"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.7 });
      TweenMax.from(document.getElementById("29"), 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.8 });
      TweenMax.from(document.getElementById("h2"), 4, { x: -1600, ease: Elastic.easeOut, delay: 4 });
      TweenMax.from(document.getElementById("icon"), 4, { x: -1200, ease: Bounce.easeOut, delay: 4.2 });
    }
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }

  }

  scrollElement(element, duration) {
    this.scrollService.scrollTo(element, duration);
  }

  lead(){
    this.dialog.confirm('', '', '', '').subscribe(res =>{
      
    })
  }

}
