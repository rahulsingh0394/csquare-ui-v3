import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './careers.component';

const routes: Routes =[
    {path: '',
    component: CareersComponent,
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: 'home' }
    ] 
    }
];

export const routing = RouterModule.forChild(routes);