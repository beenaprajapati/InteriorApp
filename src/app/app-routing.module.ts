import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { AboutComponent } from './components/site/about/about.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { LoginComponent } from './components/site/login';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
