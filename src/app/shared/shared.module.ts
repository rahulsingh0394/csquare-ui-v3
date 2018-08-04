import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FilterPipeModule } from './pipes/filters/fliter.module';
import { BannerComponent } from './banner/banner.component';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        FilterPipeModule,
        NguCarouselModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule
    ],
    entryComponents: [
        BannerComponent,
        NavbarComponent,
        FooterComponent
    ],
    declarations: [
        BannerComponent,
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        BannerComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [
        BannerComponent,
        NavbarComponent,
        FooterComponent
    ]
})
export class SharedModule { }