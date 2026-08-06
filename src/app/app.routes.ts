import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page.component').then(
        (component) => component.HomePageComponent,
      ),
    title: 'MAL Tecnologia | Soluções digitais sob medida',
  },
  { path: '**', redirectTo: '' },
];
