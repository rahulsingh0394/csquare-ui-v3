import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild("a") a: ElementRef;
  @ViewChild("b") b: ElementRef;
  @ViewChild("c") c: ElementRef;
  @ViewChild("d") d: ElementRef;
  @ViewChild("e") e: ElementRef;
  @ViewChild("f") f: ElementRef;
  @ViewChild("g") g: ElementRef;
  @ViewChild("h") h: ElementRef;
  @ViewChild("i") i: ElementRef;
  @ViewChild("j") j: ElementRef;
  @ViewChild("k") k: ElementRef;
  @ViewChild("l") l: ElementRef;
  @ViewChild("m") m: ElementRef;
  @ViewChild("n") n: ElementRef;
  @ViewChild("o") o: ElementRef;
  @ViewChild("p") p: ElementRef;
  @ViewChild("q") q: ElementRef;
  @ViewChild("r") r: ElementRef;
  @ViewChild("s") s: ElementRef;
  @ViewChild("t") t: ElementRef;
  @ViewChild("u") u: ElementRef;
  @ViewChild("v") v: ElementRef;
  @ViewChild("w") w: ElementRef;
  @ViewChild("x") x: ElementRef;
  @ViewChild("y") y: ElementRef;
  @ViewChild("z") z: ElementRef;
  @ViewChild("aa") aa: ElementRef;
  @ViewChild("bb") bb: ElementRef;
  @ViewChild("cc") cc: ElementRef;

  public carouselOne: NguCarousel;
  testBrowser: boolean;
  mainButton: any = 'Click here to get a free demo class (Only For Student/Parent)';
  width: boolean = false;

  constructor(
    private scrollService: ScrollToService,
    private dialog: BannerFormService,
    @Inject(PLATFORM_ID) private platformId: string,
    private el: ElementRef
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
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
    if (this.testBrowser == true) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      if(width <= 600 ) {
        this.mainButton = 'Get A Free Demo Class';
        this.width = true;
      } else {
     // TweenMax.from(document.getElementById("main"), 2, { opacity: 0 });
    //  this.el.nativeElement.
    setTimeout(() => {
      TweenMax.from(this.a.nativeElement, 2, { y: -1200, rotation: 90, ease: Power2.easeOut });
      TweenMax.from(this.b.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .1 });
      TweenMax.from(this.c.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .2 });
      TweenMax.from(this.d.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .3 });
      TweenMax.from(this.e.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .4 });
      TweenMax.from(this.f.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .5 });
      TweenMax.from(this.g.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .6 });
      TweenMax.from(this.h.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .7 });
      TweenMax.from(this.i.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .8 });
      TweenMax.from(this.j.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: .9 });
      TweenMax.from(this.k.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.0 });
      TweenMax.from(this.l.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.1 });
      TweenMax.from(this.m.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.2 });
      TweenMax.from(this.n.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.3 });
      TweenMax.from(this.o.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.4 });
      TweenMax.from(this.p.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.5 });
      TweenMax.from(this.q.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.6 });
      TweenMax.from(this.r.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.7 });
      TweenMax.from(this.s.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.8 });
      TweenMax.from(this.t.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 1.9 });
      TweenMax.from(this.u.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2 });
      TweenMax.from(this.v.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.1 });
      TweenMax.from(this.w.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.2 });
      TweenMax.from(this.x.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.3 });
      TweenMax.from(this.y.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.4 });
      TweenMax.from(this.z.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.5 });
      TweenMax.from(this.aa.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.6 });
      TweenMax.from(this.bb.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.7 });
      TweenMax.from(this.cc.nativeElement, 2, { y: -1200, rotation: 180, ease: Power2.easeOut, delay: 2.8 });
      TweenMax.from(document.getElementById('h2'), 4, { x: -1600, ease: Elastic.easeOut, delay: 4 });
      TweenMax.from(document.getElementById('icon'), 4, { x: -1200, ease: Bounce.easeOut, delay: 4.2 });
    }, 1000);
      
      }
    }

  }

  scrollElement(element, duration) {
    this.scrollService.scrollTo(element, duration);
  }

  lead(){
    let value = {};
    value['type'] = 1;
    this.dialog.confirm('', '', '', '', value).subscribe(res =>{
      
    })
  }

}
