import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routing } from './inside-seo-pagerouting';
import { SharedModule } from '../shared/shared.module';

// Material Modules 
import {
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule
} from '@angular/material';
import { InsideSeoPageComponent } from './inside-seo-page.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatDividerModule,
        MatTabsModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        routing
    ],
    declarations: [

        InsideSeoPageComponent,
    ],
    providers: [
    ],
    entryComponents: [
    ]

})
export class InsideSeoPageModule {
}
