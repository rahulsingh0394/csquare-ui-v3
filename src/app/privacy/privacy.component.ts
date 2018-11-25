import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  imgUrl: any = 'assets/images/privacy.png';
  textTitle: any = 'Privacy & Policy';

  constructor(
    private meta: Meta, private title: Title
    ) {
      this.meta.addTag({name: 'description', content: 'CsquareEducation Privacy and policy. Please read terms and policy clearly.'});
      this.title.setTitle('Privacy :CsquareEducation');
     }

  ngOnInit() {
  }

}
