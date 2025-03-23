import { Routes } from '@angular/router';
import { PageLayoutComponent } from './shared/components/page-layout/page-layout.component';

export const routes: Routes = [
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
];
