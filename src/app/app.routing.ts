import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/errors/error-page/error-page.component';
import { HomeComponent } from './components/layouts/body/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path:  '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    appRouter
  ]
})
export class RoutingModule { }
