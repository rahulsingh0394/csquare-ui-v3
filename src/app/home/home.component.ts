import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NguCarousel, NguCarouselStore, NguCarouselService } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chart = [];
  readMore1 = 'Read More';
  show1: boolean = false;
  readMore2 = 'Read More';
  show2: boolean = false;
  readMore3 = 'Read More';
  show3: boolean = false;
  imgSrc: any;
  description: any;
  name: any;
  type: any;
  testBrowser: any;
  public carouselOne: NguCarousel;
  slideShow: boolean = true;

  private carouselToken: string;

  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;
  panelOpenState = false;
  isMobile: any = false;
  imgWidth: any = 'row';
  padding: any;
  isBrowser: any = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private carousel: NguCarouselService
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 3000,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      easing: 'ease',
      custom: 'banner'
    }
    this.carouselTileItems = ['assets/images/glassdoor-logo.jpg', 'assets/images/datafox-logo.jpg','assets/images/connect2india-logo.jpg',
    'assets/images/dragdeal-logo.png', 'assets/images/e27-logo.png', 'assets/images/edugorilla-logo.png','assets/images/youngbuzz-logo.png',
    'assets/images/edial.png', 'assets/images/indiaMart.png', 'assets/images/jora.PNG', 'assets/images/urbanpro.png'];

    this.carouselTile = {
      grid: {xs: 2, sm: 2, md: 3, lg: 4, all: 0},
      slide: 2,
      speed: 400,
      interval: 3000,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease',
      loop: true
    }
    if(this.testBrowser == true){
      this.isBrowser = true;
     let width = window.innerWidth;
     if(width > 600 && width < 1000){
       this.padding = 'pr-1';
     }
     if(width < 800) {
       this.isMobile = true;
       this.imgWidth = 'column';
     }
     }
  }

  initDataFn(key: NguCarouselStore) {
    this.carouselToken = key.token;
  }


  public myfunc(event: Event) {
    if(this.testBrowser == true) {
      for (let i = 2; i <= this.userList.length; i++) {
          this.imgSrc = this.userList[i].imgSrc;
          this.description = this.userList[i].description;
          this.name = this.userList[i].name;
          this.type = this.userList[i].type;
      }
    }
 }

  imageclick(event: any) {
    this.slideShow = false;
    let index = parseInt(event);
    index--;
    this.imgSrc = this.userList[index].imgSrc;
    this.description = this.userList[index].description;
    this.name = this.userList[index].name;
    this.type = this.userList[index].type;
    setTimeout(() => {
      this.slideShow = true;
    }, 5000);
  }

  changeButton1() {
    this.show1 = !this.show1;
    if (this.show1 == true) {
      this.readMore1 = 'Show Less';
    } else {
      this.readMore1 = 'Read More';
    }
  }

  changeButton2() {
    this.show2 = !this.show2;
    if (this.show2 == true) {
      this.readMore2 = 'Show Less';
    } else {
      this.readMore2 = 'Read More';
    }
  }

  changeButton3() {
    this.show3 = !this.show3;
    if (this.show3 == true) {
      this.readMore3 = 'Show Less';
    } else {
      this.readMore3 = 'Read More';
    }
  }

  public lineChartData: Array<any> = [
    { data: [2500, 3000, 3500, 3800, 3900, 6000, 8000, 9000], label: 'Public Institutions' },
    { data: [10000, 13000, 16000, 18000, 21000, 23000, 24000, 26000], label: 'Private Institutions' },
  ];
  public lineChartLabels: Array<any> = ['80-81', '85-86', '90-91', '95-96', '00-01', '05-06', '10-11', '14-15'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(27, 155, 229, 0.4)',
      borderColor: '#1B9CE5',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(108, 218, 238, 0.4)',
      borderColor: '#6CDAEE',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  userList: any[] = [
    {
      "name": "Nitesh Kumar",
      "imgSrc": "assets/tutor-parents/Nitesh.jpg",
      "description": "One of the best place to take tuition. Faculty and support provided by this institution is of best quality. My brother scored 95.6% in 10th board after getting good support and faculty by Csquareeducation. They help in all possible way. All the best, keep it up.",
      "type": " CsquareEducation Client"
    }, {
      "name": "Sinchana",
      "imgSrc": "assets/tutor-parents/sinchana.jpg",
      "description": "I got very good tutor for my brother who is writing 12th exam even very good support from csquare. I can say csquare education is an one of the best home tuition provider in Bangalore. They helped us not only with studies but also in personality development.",
      "type": " CsquareEducation Tutor"
    }, {
      "name": "Apporva",
      "imgSrc": "assets/tutor-parents/apoorva.jpg",
      "description": "I have been working in CsquareEducation for about more than two years. It's good place to start as a tutor. Working hours are flexible and the environment is pretty good.",
      "type": " CsquareEducation Client"
    }, {
      "name": "Rahul Tayal",
      "imgSrc": "assets/tutor-parents/RahulSublime.jpg",
      "description": "I got very good tutor from CsquareEducation. They are doing regular monitoring and even once i got issue with tutor but they are resolved that issue very nicely. Overall service is amazing. Keep it up CsquareEducation.",
      "type": " CsquareEducation Client"
    }, {
      "name": "Anil",
      "imgSrc": "assets/tutor-parents/anil.jpg",
      "description": "It's my pleasure to be part of CsquareEducation. Also got a lot of opportunities to deal different kindof students.",
      "type": " CsquareEducation Tutor"
    }, {
      "name": "Vinay Hawargi",
      "imgSrc": "assets/tutor-parents/Vinay.jpg",
      "description": "I got tutor from csquare, but he was creating to much problem to me, so I asked csquare to solved my problem. Csquare changed that tutor and aligned with another tutor in one week. Overall I can say good support and better result for student as well as parents.",
      "type": " CsquareEducation Client"
    }, {
      "name": "Rajesh Kumar Singh",
      "imgSrc": "assets/tutor-parents/Rajesh.jpg",
      "description": "I am using services from CsquareEducation since 2014 and i can say it is one of the best home tuition provider in bangalore. Moreover they are providing tutor who are highly qualified and very talented. They provide us progress report of my children which proves to be very useful. Thank You CsquareEducation for you services.",
      "type": " CsquareEducation Client"
    }, {
      "name": "Vidya Sagar",
      "imgSrc": "assets/tutor-parents/vidya.jpg",
      "description": "I got very good tutor for my brother who is writing 12th exam even very good support from csquare. I can say csquare education is an one of the best home tuition provider in Bangalore. They helped us not only with studies but also in personality development.",
      "type": " CsquareEducation Client"
    }, {
      "name": "Ujjwal Agrawal",
      "imgSrc": "assets/tutor-parents/Ujwal.jpg",
      "description": "Hello.. i'm sharing my personal revel in, Csquare Education teachers are very experience first they increase our basic expertise to any subject matter and solve issues to low degree to high level, and teachers are very supportive and helpfull too.",
      "type": " CsquareEducation Client"
    }, {
      "name": "Anuj Agarwal",
      "imgSrc": "assets/tutor-parents/Anuj.jpg",
      "description": "I got tutor from csquare, but he was creating to much problem to me, so I asked csquare to solved my problem. Csquare changed that tutor and aligned with another tutor in one week. Overall I can say good support and better result for student as well as parents.",
      "type": " CsquareEducation Client"
    }, {
      "name": "Shubham Srivastava",
      "imgSrc": "assets/tutor-parents/Viky.jpg",
      "description": " Luckily I got the opportunity to work here. Lots of memory attached as it is one of the unequaled institute I came across in near time as the environment, culture, care, academics, timeliness, punctuality is given utter importance. They have a great and hardworking team and the prime thing is that the focus is on everyone. No one go unnoticed. I have seen lot of happy parents. Great work. #CsqaureEducation",
      "type": " CsquareEducation Tutor"
    }, {
      "name": "Pradeep",
      "imgSrc": "assets/tutor-parents/pradeep.jpg",
      "description": " I got best home tutor for my children where the service from csquare education is systematically reviewing my child's academics progress, I found best home tutor in Bangalore. Thank you CsquareEducation for amazing service.",
      "type": " CsquareEducation Client"
    }
  ]

}
