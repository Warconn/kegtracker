import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KegtrackingService } from './services/kegtracking.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardComponent } from '@app/components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgxLiquidGaugeModule } from 'ngx-liquid-gauge';

@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    NgxLiquidGaugeModule
  ],
  providers: [
    KegtrackingService
  ],
  bootstrap: [NavbarComponent]
})
export class AppModule { }
