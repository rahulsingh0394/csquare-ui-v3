import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routing } from './contact.routing';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';

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
import { ContactComponent } from './contact.component';


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
        routing,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBXjp9cFFor379eup2SY8hn33DNNmB5ixo'
          }),
    ],
    declarations: [

        ContactComponent,
    ],
    providers: [
    ],
    entryComponents: [
    ]

})
export class ContactModule {
}
