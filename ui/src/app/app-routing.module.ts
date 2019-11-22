import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreatenewkegComponent } from './components/createnewkeg/createnewkeg.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'create-new', component: CreatenewkegComponent },
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
