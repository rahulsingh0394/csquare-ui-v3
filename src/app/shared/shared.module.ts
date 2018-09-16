import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FilterPipeModule } from './pipes/filters/fliter.module';
import { BannerComponent } from './banner/banner.component';

import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTabsModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { BannerTopComponent } from './banner-top/banner-top.component';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { BannerFormService } from './banner-form/banner-form.service';
import { ApiService } from './banner-form/api-service.service';
import { BannerSeoComponent } from './banner-seo/banner-seo.component';
import { LeadFormComponent } from './lead-form/lead-form.component';

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
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatDialogModule,
        MatStepperModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatCardModule,
        MatTabsModule
    ],
    entryComponents: [
        BannerComponent,
        NavbarComponent,
        FooterComponent,
        FaqComponent,
        BannerTopComponent,
        BannerFormComponent,
        BannerSeoComponent,
        LeadFormComponent
    ],
    declarations: [
        BannerComponent,
        NavbarComponent,
        FooterComponent,
        FaqComponent,
        BannerTopComponent,
        BannerFormComponent,
        BannerSeoComponent,
        LeadFormComponent
    ],
    exports: [
        BannerComponent,
        NavbarComponent,
        FooterComponent,
        FaqComponent,
        BannerTopComponent,
        BannerFormComponent,
        BannerSeoComponent,
        LeadFormComponent
    ],
    providers: [
        BannerComponent,
        NavbarComponent,
        FooterComponent,
        FaqComponent,
        BannerTopComponent,
        BannerFormService,
        ApiService,
        BannerSeoComponent,
        LeadFormComponent
    ]
})
export class SharedModule { }