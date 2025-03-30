import { Routes } from '@angular/router';
import { PageLayoutComponent } from './shared/components/page-layout/page-layout.component';

export const routes: Routes = [
  {
    path: 'not-found',
    component: PageLayoutComponent,
    children: [{
      path: '',
      loadComponent: () => import('./modules/404/404-not-found.component')
        .then(m => m.NotFoundComponent)
    }]
  },
  {
    path: '',
    component: PageLayoutComponent,
    children: [
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
    ]
  },
  // Adiciona a rota curinga para redirecionar para 'not-found'
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
