import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KegtrackingService } from './services/kegtracking.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    KegtrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
