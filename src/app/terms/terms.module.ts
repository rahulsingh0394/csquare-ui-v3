import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routing } from './terms.routing';
import { SharedModule } from '../shared/shared.module';

// Material Modules 
import {
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule
} from '@angular/material';
import { TermsComponent } from './terms.component';


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
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        routing
    ],
    declarations: [

        TermsComponent,
    ],
    providers: [
    ],
    entryComponents: [
    ]

})
export class TermsModule {
}
