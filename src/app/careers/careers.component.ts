import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(
    private meta: Meta, private title: Title
  ) { 
    this.meta.addTag({name: 'description', content: 'Want a home private tutor job in india or Want a BDA/ sales executive jobs. Check vacancies for available position in CsquareEducation Careers Page.'});
    this.title.setTitle('Careers at CsquareEducation for different Position');
  }

  ngOnInit() {
  }

}
