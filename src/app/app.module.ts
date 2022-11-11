import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AboutComponent, WordMergerComponent } from './index'
import { ApplicationHttpClient, applicationHttpClientCreator } from './common/services/commonhttp.interceptor2';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WordMergerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [ 
    //Provide the extended HttpClient
    {
      provide: ApplicationHttpClient,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }