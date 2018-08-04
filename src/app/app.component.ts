import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  testBrowser: any;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    this.testBrowser = isPlatformBrowser(platformId);
   }

  ngOnInit() {

  }
}
