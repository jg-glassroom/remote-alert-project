import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PacingAlertsComponent } from './components/pacing-alerts/pacing-alerts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PacingTemplateComponent } from './components/pacing-template/pacing-template.component';

import { loggedInGuard } from './guards/logged-in/logged-in.guard';
import { notLoggedInGuard } from './guards/not-logged-in/not-logged-in.guard';


export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [loggedInGuard] },
    { path: 'alerts', component: PacingAlertsComponent, canActivate: [loggedInGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [loggedInGuard] },
    { path: 'pacing', component: PacingTemplateComponent, canActivate: [loggedInGuard] },
    { path: '', component: SignInComponent, canActivate: [notLoggedInGuard] },
];
