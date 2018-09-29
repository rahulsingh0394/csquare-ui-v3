import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyModule' },
  { path: 'careers', loadChildren: './careers/careers.module#CarrersModule' },
  { path: 'question', loadChildren: './question/question.module#QuestionModule' },
  { path: 'bangalore', loadChildren: './seo-pages/seo-pages.module#SeoPagesModule' },
  { path: 'bangalore/home-tutors-private-tutors', loadChildren:'./inside-seo-page/inside-seo-page.module#InsideSeoPageModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



