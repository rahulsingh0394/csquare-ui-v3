import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { BannerFormComponent } from './banner-form.component';
import { environment } from '../../../environments/environment';

@Injectable()
export class BannerFormService {

  testBrowser: any;
  width: any;
  height: any;
  isMobile: any;

  constructor(
    private dialog: MatDialog,
    private http: Http,
    @Inject(PLATFORM_ID) private platformId: string) {
    this.testBrowser = isPlatformBrowser(platformId);
    if(this.testBrowser == true) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      if(width <= 800) {
        this.width = width - 60;
        this.height = height - 40;
        this.isMobile = true;
      } else if(width > 800 && width <= 1200) {
        this.width = width - 200;
        this.height = height - 100;
        this.isMobile = true;
      } else {
        this.width = width - 400;
        this.height = height - 100;
        this.isMobile = false;
      }
     }
   }

  public confirm(isMobile: string, height, width, message: string): Observable<boolean> {
    isMobile = this.isMobile;
    height = this.height;
    width = this.width;
    let dialogRef: MatDialogRef<BannerFormComponent>;
    dialogRef = this.dialog.open(BannerFormComponent, {
      width: this.width+'px',
      height: this.height+'px',
      disableClose: true,
      data: { isMobile, message, width, height }
    });
    return dialogRef.afterClosed();
  }

}