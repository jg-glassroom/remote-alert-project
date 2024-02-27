import { Routes } from '@angular/router';

import { TableComponent } from './components/table/table.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AlertsComponent } from './components/alerts/alerts.component';

import { loggedInGuard } from './guards/logged-in/logged-in.guard';
import { notLoggedInGuard } from './guards/not-logged-in/not-logged-in.guard';


export const routes: Routes = [
    { path: 'home', component: TableComponent, canActivate: [loggedInGuard] },
    { path: 'alerts', component: AlertsComponent, canActivate: [loggedInGuard] },
    { path: '', component: SignInComponent, canActivate: [notLoggedInGuard] },
];
