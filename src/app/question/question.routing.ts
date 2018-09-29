import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question.component';

const routes: Routes =[
    {path: '',
    component: QuestionComponent,
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: 'home' }
    ] 
    }
];

export const routing = RouterModule.forChild(routes);