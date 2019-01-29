import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { MyWebsiteModule } from './modules/my-website/my-website.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootbarComponent } from './components/footbar/footbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyWebsiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
