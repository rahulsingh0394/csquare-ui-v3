import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeTuitionBangaloreComponent } from './home-tuition-bangalore/home-tuition-bangalore.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor', component: HomeTuitionBangaloreComponent },
  { path: 'bangalore/home-tutors-private-tutors', component: HomeTuitionBangaloreComponent },
  { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor', component: HomeTuitionBangaloreComponent },
  { path: 'bangalore/home-tutors-private-tutors/Class-wise-best-private-home-tutor/Class1', component: HomeTuitionBangaloreComponent },
  { path: 'bangalore/home-tutors-private-tutors/Syllabus-wise-best-private-home-tutor/CBSE', component: HomeTuitionBangaloreComponent },
  { path: 'home-tuition-bangalore', component: HomeTuitionBangaloreComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



