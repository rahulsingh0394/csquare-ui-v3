import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  imgUrl: any = 'assets/images/careers.jpg';
  testBrowser: any;
  textTitle: any = 'Careers';
  imgWidth: any = 'row';

  constructor() { }

  ngOnInit() {
  }

}
