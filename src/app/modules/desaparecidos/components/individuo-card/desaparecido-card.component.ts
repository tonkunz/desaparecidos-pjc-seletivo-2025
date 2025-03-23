import { Component, input, OnInit } from '@angular/core';
import { IDesaparecido } from '../../desaparecidos.types';

@Component({
  selector: 'desaparecido-card',
  templateUrl: './desaparecido-card.component.html',
})
export class DesaparecidoCardComponent implements OnInit {
  desaparecido = input.required<IDesaparecido>();

  ngOnInit(): void { }
}
