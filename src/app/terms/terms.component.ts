import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  imgUrl: any = 'assets/images/terms.jpg';
  textTitle: any = 'Terms & Conditions';

  constructor() { }

  ngOnInit() {
  }

}
