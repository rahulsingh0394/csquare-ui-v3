import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-banner-seo',
  templateUrl: './banner-seo.component.html',
  styleUrls: ['./banner-seo.component.scss']
})
export class BannerSeoComponent implements OnInit {

  @Input() imgUrl: any;
  @Input() title: any;
  @Input() city: any;

  constructor(
    private scrollService: ScrollToService
  ) {
  }

  ngOnInit() {
    
  }

  scrollElement(element, duration) {
    this.scrollService.scrollTo(element, duration);
  }

}
