import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy.component';

const routes: Routes =[
    {path: '',
    component: PrivacyComponent,
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: 'home' }
    ] 
    }
];

export const routing = RouterModule.forChild(routes);