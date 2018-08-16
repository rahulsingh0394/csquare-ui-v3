import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TweenMax } from "gsap";
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private toggleButton: any;
  private sidebarVisible: boolean;
  @ViewChild(".nav-link") el: ElementRef;
  showLink: object;
  screenHeight: any;
  screenWidth: any;
  deviceInfo: any;
  testBrowser: any;

  constructor(
    private element: ElementRef,
    private router: Router,
    private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: string) {
    this.testBrowser = isPlatformBrowser(platformId);
    this.sidebarVisible = false;
  }
  ngOnInit() {
    // const navbar: HTMLElement = this.element.nativeElement;
    // this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    if (this.testBrowser == true) {
      const width = window.screen.width;
      const height = window.screen.height;
      if (width <= 800 && height <= 800) {

      } else {
        // TweenMax.from(document.getElementById("nav"), 0.5, {opacity: 0, y: -50, delay: 1});
        TweenMax.staggerFrom(document.getElementsByClassName("labelBtn"), 0.5, { opacity: 0, y: -50, delay: 1.5 }, 0.2);
        TweenMax.staggerFrom(document.getElementsByClassName("nav-item"), 0.5, { opacity: 0, y: -50, delay: 2 }, 0.2);
       // TweenMax.fromTo(document.getElementById("logo-head"), 2, { x: -20, y: -10 }, { x: 20, y: 10 }).repeat(20);
      }
    }
  }
  // sidebarOpen() {
  //   const toggleButton = this.toggleButton;
  //   const html = document.getElementsByTagName('html')[0];

  //   setTimeout(function () {
  //     toggleButton.classList.add('toggled');
  //   }, 100);
  //   html.classList.add('nav-open');

  //   this.sidebarVisible = true;
  // };
  // sidebarClose() {
  //   const html = document.getElementsByTagName('html')[0];
  //   this.toggleButton.classList.remove('toggled');
  //   this.sidebarVisible = false;
  //   html.classList.remove('nav-open');
  // };
  // sidebarToggle() {
  //   if (this.sidebarVisible === false) {
  //     this.sidebarOpen();
  //   } else {
  //     this.sidebarClose();
  //   }
  // };

  buttonClick(data: any) {
    this.router.navigateByUrl(data);
  }

  menuToggle(event: any) {
    debugger;
    // console.log(event.target);
    // this.remove();
    if(event.currentTarget.className == 'navbar-brand'){
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
}
