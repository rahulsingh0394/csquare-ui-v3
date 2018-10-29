import { Routes, RouterModule } from '@angular/router';
import { SeoPagesComponent } from './seo-pages.component';

const routes: Routes = [
    {
        path: '',
        component: SeoPagesComponent,
        children: [
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor', component: SeoPagesComponent },
            { path: 'bangalore/home-tutors-private-tutors', component: SeoPagesComponent },
            { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor', component: SeoPagesComponent },
            { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class1', component: SeoPagesComponent },
            { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/CBSE', component: SeoPagesComponent },
            { path: 'home-tuition-bangalore', component: SeoPagesComponent},
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
