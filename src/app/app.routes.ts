import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AcademicsComponent } from './components/academics/academics.component';
import { ContactComponent } from './components/contact/contact.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'academics/:academicType', component: AcademicsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'register', component: RegisterComponent },
];
