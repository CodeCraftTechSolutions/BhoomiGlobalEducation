import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AcademicsComponent } from './components/academics/academics.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'academics',
        component: AcademicsComponent, // Parent component for academics
        children: [
          { path: '', redirectTo: 'graduate', pathMatch: 'full' }, // Default child route
          { path: 'graduate', component: AcademicsComponent },
          { path: 'postgraduate', component: AcademicsComponent }
        ]
      },
];
