import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

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
    private meta: Meta, private title: Title
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.meta.addTag({name: 'description', content: 'Need to know about home tuition, private tuition, tuition teacher or tutor job in india. Contact us at CsquareEducation or fill need tutor or be tutor form and we will do rest for you.'});
    this.title.setTitle('Contact Us: CsquareEducation');
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
