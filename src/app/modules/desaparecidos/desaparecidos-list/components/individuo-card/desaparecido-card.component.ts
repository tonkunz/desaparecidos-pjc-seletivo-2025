import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IDesaparecido } from '../../desaparecidos.types';

@Component({
  selector: 'desaparecido-card',
  templateUrl: './desaparecido-card.component.html',
  imports: [
    RouterLink,
  ]
})
export class DesaparecidoCardComponent {
  desaparecido = input.required<IDesaparecido>();
}
