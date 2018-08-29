import { Routes, RouterModule } from '@angular/router';
import { TermsComponent } from './terms.component';

const routes: Routes =[
    {path: '',
    component: TermsComponent,
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: 'home' }
    ] 
    }
];

export const routing = RouterModule.forChild(routes);