import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  testBrowser: any;
  imgWidth: any = 'row';
  readMore1: any = 'See More...';
  readMore2: any = 'See More...';
  readMore3: any = 'See More...';
  readMore4: any = 'See More...';
  readMore5: any = 'See More...';
  readMore6: any = 'See More...';

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private router: Router
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if(this.testBrowser == true){
      const width = window.innerWidth;
      if(width <= 800){
        this.imgWidth = 'column';
      }
    }
  }

  changeButton(id: any) {
    if (id == '1') {
      if (this.readMore1 == 'See More...') {
        this.readMore1 = 'See Less...';
      } else {
        this.readMore1 = 'See More...';
      }
    } else if (id == '2') {
      if (this.readMore2 == 'See More...') {
        this.readMore2 = 'See Less...';
      } else {
        this.readMore2 = 'See More...';
      }
    } else if (id == '3') {
      if (this.readMore3 == 'See More...') {
        this.readMore3 = 'See Less...';
      } else {
        this.readMore3 = 'See More...';
      }
    } else if (id == '4') {
      if (this.readMore4 == 'See More...') {
        this.readMore4 = 'See Less...';
      } else {
        this.readMore4 = 'See More...';
      }
    } else if (id == '5') {
      if (this.readMore5 == 'See More...') {
        this.readMore5 = 'See Less...';
      } else {
        this.readMore5 = 'See More...';
      }
    } else if (id == '6') {
      if (this.readMore6 == 'See More...') {
        this.readMore6 = 'See Less...';
      } else {
        this.readMore6 = 'See More...';
      }
    }
  }

  navigate(data) {
    this.router.navigateByUrl(data);
    window.location.reload();
  }

}
