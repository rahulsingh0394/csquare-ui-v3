import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  imgUrl: any = 'assets/images/contact.jpg';
  testBrowser: any;
  textTitle: any = 'Contact Us';
  imgWidth: any = 'row';

  lat: number = 12.9164;
  lng: number = 77.6190;
  zoom: number = 8;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if(this.testBrowser == true){
      let  width = window.innerWidth;

      if(width <= 600){
        this.imgWidth = 'column';
      }
    }
  }

}
