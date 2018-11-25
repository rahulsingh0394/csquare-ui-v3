import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TweenMax } from 'gsap';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('questionCard') card: ElementRef
  imgWidth: any = 'row';
  testBrowser: any;
  imgUrl: any = 'assets/images/question1.jpg';
  textTitle: any = 'Question Paper';
  isMobile: any = false;
  isBrowser: any = false;

 constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private meta: Meta, private title: Title
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.meta.addTag({name: 'description', content: 'Previous 5 ,10 years question paper cbse, icse, karnataka board for class 10 &amp; 12 of mathematics, physics, chemistry, biology, english, social-science, hindi and other in one click.'});
    this.title.setTitle('One Click Cbse, Icse, Karnataka Board Previous Year Question Paper');
  }

  ngOnInit() {
    if(this.testBrowser == true){
      this.isBrowser = true;
      let  width = window.innerWidth;

      if(width <= 600){
        this.imgWidth = 'column';
      }
      if(width <=800) {
        this.isMobile = true;
      }
    }
  }

  test() {
    console.log(this.card)
    TweenMax.to(this.card, 5, {rotation: 180})
  }

  test2() {

  }

}
