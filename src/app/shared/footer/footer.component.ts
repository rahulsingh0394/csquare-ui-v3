import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  test: Date = new Date();
  testBrowser: any;
  row: any = 'row';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.testBrowser == true) {
      let width = window.innerWidth;
      if (width <= 800) {
        this.row = 'column';
      }
    }
  }

}
