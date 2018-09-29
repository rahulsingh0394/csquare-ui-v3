import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routing } from './question.routing';
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
import { QuestionComponent } from './question.component';


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

        QuestionComponent,
    ],
    providers: [
    ],
    entryComponents: [
    ]

})
export class QuestionModule {
}
