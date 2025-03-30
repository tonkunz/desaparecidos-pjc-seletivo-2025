import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IDesaparecidoDetails } from '@shared/types/desaparecido-details.types';
import { RandomDesaparecidoService } from './random-desaparecido.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'random-desaparecido',
  templateUrl: './random-desaparecido.component.html',
  standalone: true,
  imports: [
    RouterLink,
    TitleCasePipe,
    MatProgressSpinnerModule
  ],
  providers: [
    RandomDesaparecidoService,
  ]
})
export class RandomDesaparecidoComponent implements OnInit {
  private _service = inject(RandomDesaparecidoService);

  desaparecidos: IDesaparecidoDetails[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this._service.getRandomDesaparecido(3)
      .subscribe({
        next: (desaparecidos) => {
          this.desaparecidos = desaparecidos;
          this.isLoading = false;
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        }
      });
  }
}
