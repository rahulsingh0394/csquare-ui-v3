import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TweenMax } from "gsap";
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { BannerFormService } from '../banner-form/banner-form.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private toggleButton: any;
  private sidebarVisible: boolean;
  @ViewChild(".nav-link") el: ElementRef;
  @ViewChild('mySidenav') sideNav: ElementRef;
  showLink: object;
  imgWidth: any = 'row';
  screenWidth: any;
  deviceInfo: any;
  testBrowser: any;
  test: Date = new Date();

  constructor(
    private element: ElementRef,
    private router: Router,
    private dialog: BannerFormService,
    private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: string) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.sidebarVisible = false;
  }
  ngOnInit() {
    if (this.testBrowser == true) {
      const width = window.screen.width;
      const height = window.screen.height;
      if(width <= 700) {
        this.imgWidth = 'column';
      }
      if (width <= 800) {
        this.screenWidth = true;
      } else {
        this.screenWidth = false;
        TweenMax.staggerFrom(document.getElementsByClassName("labelBtn"), 0.5, { opacity: 0, y: -50, delay: 1.5 }, 0.2);
        TweenMax.staggerFrom(document.getElementsByClassName("nav-item"), 0.5, { opacity: 0, y: -50, delay: 2 }, 0.2);
      }
    }
  }

  buttonClick(id: any) {
    if(id == '1'){
      this.sideNav.nativeElement.style.width = "0";
      let value = {};
      value['type'] = 1;
      this.dialog.confirm('', '', '', '', value).subscribe(res => {
  
      })
    } else {
      this.sideNav.nativeElement.style.width = "0";
      let value = {};
      value['type'] = 2;
      this.dialog.confirm('', '', '', '', value).subscribe(res => {
  
      })
    }
  }

  menuToggle(event: any) {
    if (event.currentTarget.className == 'navbar-brand') {
      this.remove();
      this.renderer.addClass(document.getElementById("home"), "active");
    } else {
      this.remove();
      this.renderer.addClass(event.target, "active");
    }
  }

  remove() {
    // you'll get your through 'elements' below code
    let elements = this.element.nativeElement.querySelectorAll('.nav-link');
    elements.forEach(element => {
      this.renderer.removeClass(element, "active");
    });
    //this.renderer.removeClass(elements, "active");
  }

  openNav() {
    this.sideNav.nativeElement.style.width = "100%";
  }

  closeNav() {
    this.sideNav.nativeElement.style.width = "0";
  }
}
