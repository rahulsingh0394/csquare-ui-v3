import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

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
    private meta: Meta, private title: Title
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.meta.addTag({name: 'description', content: 'CsquareEducation is home tutoring and Online Classes service provider with very dedicated and qualified team. We are working towands enhancement of education in India.'});
    this.title.setTitle('About us :CsquareEducation');
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
