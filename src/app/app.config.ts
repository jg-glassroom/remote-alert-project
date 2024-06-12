import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from "@angular/common/http";

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { REGION } from '@angular/fire/compat/functions';
import { provideNativeDateAdapter } from '@angular/material/core';

import { provideToastr } from 'ngx-toastr';

import { getAnalytics, isSupported } from 'firebase/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr({
      timeOut: 20000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    }),
    provideNativeDateAdapter(),
    provideRouter(routes),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    { provide: REGION, useValue: 'northamerica-northeast1' },
    provideAnimationsAsync(),
    importProvidersFrom([
      provideFirebaseApp(() => {
        const app = initializeApp(environment.firebaseConfig);
        isSupported().then(supported => {
          if (supported) {
            getAnalytics(app);
          }
        });
        return app;
      }),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
      HttpClientModule
    ]),
  ]
};
