import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EstatisticasService } from './estatisticas.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit, OnDestroy {
  private _service = inject(EstatisticasService);

  desaparecidosDisplayNumber = 0;
  desaparecidosTargetNumber = 0;
  localizadosDisplayNumber = 0;
  localizadosTargetNumber = 0;

  private animationFrame: any;

  ngOnInit(): void {
    this._service.getEstatisticas()
      .subscribe((estatisticas) => {
        this.desaparecidosTargetNumber = estatisticas.quantPessoasDesaparecidas;
        this.localizadosTargetNumber = estatisticas.quantPessoasEncontradas;
        this.startCounter(); // Inicia imediatamente após receber os dados
      });
  }

  startCounter() {
    const duration = 2000; // 2 segundos
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Atualiza os valores exibidos
      this.desaparecidosDisplayNumber = Math.floor(progress * this.desaparecidosTargetNumber);
      this.localizadosDisplayNumber = Math.floor(progress * this.localizadosTargetNumber);

      // Continua a animação até completar
      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      } else {
        // Garante que os valores finais sejam exatos
        this.desaparecidosDisplayNumber = this.desaparecidosTargetNumber;
        this.localizadosDisplayNumber = this.localizadosTargetNumber;
      }
    };

    this.animationFrame = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}
