// Modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/main/pages/home/home.component';
import { ErrorPageComponent } from './components/errors/error-page/error-page.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path:  '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    appRouter
  ]
})
export class RoutingModule { }
