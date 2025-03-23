import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import(
      './modules/desaparecidos/containers/desaparecidos.component'
    ).then(m => m.DesaparecidosComponent)
  }
];
