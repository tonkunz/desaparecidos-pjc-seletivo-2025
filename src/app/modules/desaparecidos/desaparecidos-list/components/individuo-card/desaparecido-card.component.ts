import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { IDesaparecidoDetails } from '@shared/types/desaparecido-details.types';

@Component({
  selector: 'desaparecido-card',
  templateUrl: './desaparecido-card.component.html',
  imports: [
    RouterLink,
    TitleCasePipe,
    DatePipe
  ]
})
export class DesaparecidoCardComponent {
  desaparecido = input.required<IDesaparecidoDetails>();
}
