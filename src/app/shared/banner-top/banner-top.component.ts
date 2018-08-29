import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-top',
  templateUrl: './banner-top.component.html',
  styleUrls: ['./banner-top.component.css']
})
export class BannerTopComponent implements OnInit {

  @Input() imgUrl: any;
  @Input() textTitle: any;

  constructor() { }

  ngOnInit() {
  }

}
