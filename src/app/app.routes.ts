import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PacingAlertsComponent } from './components/pacing-alerts/pacing-alerts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PacingTemplateComponent } from './components/pacing-template/pacing-template.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { PlatformsIntegrationComponent } from './components/platforms-integration/platforms-integration.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

import { loggedInGuard } from './guards/logged-in/logged-in.guard';
import { notLoggedInGuard } from './guards/not-logged-in/not-logged-in.guard';


export const routes: Routes = [
    { path: 'accounts', component: AccountsComponent, canActivate: [loggedInGuard] },
    { path: 'integrations', component: PlatformsIntegrationComponent, canActivate: [loggedInGuard] },
    { path: 'alerts/:accountId', component: AlertsComponent, canActivate: [loggedInGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [loggedInGuard] },
    { path: 'integrations/:oauthProvider', component: PlatformsIntegrationComponent, canActivate: [loggedInGuard] },
    { path: 'user_management', component: UserManagementComponent, canActivate: [loggedInGuard] },
    { path: '', component: SignInComponent, canActivate: [notLoggedInGuard] },

    // To delete
    { path: 'home', component: HomeComponent, canActivate: [loggedInGuard] },
    { path: 'alerts', component: PacingAlertsComponent, canActivate: [loggedInGuard] },
    { path: 'pacing/:campaignName', component: PacingAlertsComponent, canActivate: [loggedInGuard] },
    { path: 'pacing', component: PacingTemplateComponent, canActivate: [loggedInGuard] },
];
