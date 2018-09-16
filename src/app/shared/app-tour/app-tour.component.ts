import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as hopscotch from 'hopscotch';
import { BannerFormService } from '../banner-form/banner-form.service';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tour',
  templateUrl: './app-tour.component.html',
  styleUrls: ['./app-tour.component.css']
})
export class AppTourComponent implements OnInit, OnDestroy {
  
  testBrowser: any;
  imgWidth: any = 'row';

  constructor(
    public snackBar: MatSnackBar,
    private dialog: BannerFormService,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  } 

  ngOnInit() {
    if(this.testBrowser == true){
      let width = window.innerWidth;
      if(width < 800){
        this.imgWidth = 'column';
      }
      }
  }
  ngOnDestroy() {
    hopscotch.endTour(true);
  }
  /*
  ***** Tour Steps ****
  * You can supply tourSteps directly in hopscotch.startTour instead of 
  * returning value by invoking tourSteps method,
  * but DOM query methods(querySelector, getElementsByTagName etc) will not work
  */
  tourSteps(): any {
    let self = this;
    return {
      id: 'demo-tour',
      showPrevButton: true,
      onEnd: function() {
        self.snackBar.open('User tour ended!', 'close', { duration: 3000 });
      },
      onClose: function() {
        self.snackBar.open('You just closed User Tour!', 'close', { duration: 3000 });
      },
      steps: [
        {
          title: 'Step one',
          content: 'Click the Need Tutor button as shown.',
          target: document.querySelector('#areaOne .one'), // Element ID
          placement: 'right',
          xOffset: 10
        },
        {
          title: 'Fill up form',
          content: 'Follow instruction to fill the requirement form.',
          target: document.querySelector('#areaOne .two'),
          placement: 'left',
          xOffset: 0,
          yOffset: -10
        },
        {
          title: 'We will ask only few questions.',
          content: 'To get best home tutor for you we need to know a few question.',
          target: document.querySelector('#areaOne .three'),
          placement: 'left',
          xOffset: 0,
          yOffset: -15
        },
        {
          title: 'Wow! It is that easy',
          content: 'If not just click the button (Get Tutor!) on right and follow the instruction.',
          target: document.querySelector('#areaTwo div'), // Element ID
          placement: 'left',
          xOffset: 15,
          yOffset: 10
        }
      ]
    }
  }
  startTour() {
    debugger
    // Destroy running tour
    hopscotch.endTour(true);
    // Initialize new tour 
    hopscotch.startTour(this.tourSteps());
  }

  buttonClick(id: any) {
    if(id == '1'){
      this.dialog.confirm('', '', '', '', '').subscribe(res => {
  
      })
    } else {
      this.dialog.confirm('', '', '', '', '').subscribe(res => {
  
      })
    }
  }
}
