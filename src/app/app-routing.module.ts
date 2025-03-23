import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ParahComponent } from './parah/parah.component';

const routes: Routes = [
  {'path': '', 'redirectTo': '/home', 'pathMatch': 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'surah', component: DashboardComponent },
  { path: 'juz', component: ParahComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
