import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  // {
  //   path: '**',
  //   loadComponent: () =>
  //     import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  // },
  {
    path: '',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.page').then(
        (m) => m.OnboardingPage
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/sign-up.page').then((m) => m.SignUpPage),
  },
];
