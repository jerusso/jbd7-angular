import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SubtextComponent } from './subtext/subtext.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SubtextComponent,
    SocialMediaComponent,
    FooterComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
