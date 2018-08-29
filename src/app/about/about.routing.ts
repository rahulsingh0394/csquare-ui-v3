import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes =[
    {path: '',
    component: AboutComponent,
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: 'home' }
    ] 
    }
];

export const routing = RouterModule.forChild(routes);