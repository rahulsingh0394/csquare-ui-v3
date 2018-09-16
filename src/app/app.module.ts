import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { NguCarouselModule } from '@ngu/carousel';
import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { reducer } from './state/app.state';
import { AppEffects } from './state/app.effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { AppService } from './app.service';

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
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'csquare' }),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FlexLayoutModule,
    ToastrModule.forRoot({
      maxOpened: 5,
      autoDismiss: false,
      newestOnTop: true,
      preventDuplicates: false,
      timeOut: 20000,
      positionClass: 'toast-top-right',
      tapToDismiss: true
    }),
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
    ChartsModule,
    ScrollToModule.forRoot(),
    AppRoutingModule,
    NguCarouselModule,
    StoreModule.forRoot({ reducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Example_store',
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }

}
