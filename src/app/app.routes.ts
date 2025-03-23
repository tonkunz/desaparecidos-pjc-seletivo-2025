import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import(
        './modules/desaparecidos/desaparecidos-list/desaparecidos-list.component'
      )
        .then(m => m.DesaparecidosComponent)
  },
  {
    path: 'desaparecido/:id',
    loadComponent: () => import(
        './modules/desaparecidos/desaparecido-details/desaparecido-details.component'
      )
        .then(m => m.DesaparecidoDetailsComponent)
  }
];
