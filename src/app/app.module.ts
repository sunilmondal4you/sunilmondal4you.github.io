import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bookReducer } from './store/common.reducer';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer ,
      bookState: bookReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
