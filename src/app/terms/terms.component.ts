import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  imgUrl: any = 'assets/images/terms.jpg';
  textTitle: any = 'Terms & Conditions';

  constructor(
    private meta: Meta, private title: Title
  ) { 
    this.meta.addTag({name: 'description', content: 'CsquareEducation terms and condition. Please go through the terms and condition carefully.'});
    this.title.setTitle('Terms :CsquareEducation');
  }

  ngOnInit() {
  }

}
