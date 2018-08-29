import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  imgUrl: any = 'assets/images/privacy.png';
  textTitle: any = 'Privacy & Policy';

  constructor() { }

  ngOnInit() {
  }

}
