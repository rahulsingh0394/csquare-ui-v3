import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes =[
    {path: '',
    component: ContactComponent,
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: 'home' }
    ] 
    }
];

export const routing = RouterModule.forChild(routes);