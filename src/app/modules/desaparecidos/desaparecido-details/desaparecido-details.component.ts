import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DesaparecidoDetailsFacadeService } from './desaparecido-details.facade';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IDesaparecidoDetails } from './desaparecido-details.types';
import { Subject, takeUntil } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ICartaz } from '../desaparecidos-list/desaparecidos.types';
import { environment } from '../../../../environments/environment.development';
import { MatDialog } from '@angular/material/dialog';
import { InformationDialogComponent } from './components/information-dialog/information-dialog.component';

@Component({
  selector: 'desaparecido-details',
  templateUrl: './desaparecido-details.component.html',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    TitleCasePipe,
    NgClass,
    DatePipe,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ]
})
export class DesaparecidoDetailsComponent implements OnInit, OnDestroy {
  facade = inject(DesaparecidoDetailsFacadeService);
  private _dialog = inject(MatDialog);
  private _route = inject(ActivatedRoute);

  // State
  id: string | null = null;
  loading: boolean = true;
  desaparecido!: IDesaparecidoDetails;
  flagLocalizado: boolean = false;

  // Unsubscribe
  private _unsubscribeAll$ = new Subject();

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');

    this.facade.load(Number(this.id));

    this.facade.isLoading$.pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((isLoading: boolean) => {
        this.loading = isLoading;
      });

    this.facade.desaparecidoDetails$.pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((desaparecido: IDesaparecidoDetails | null) => {
        if (desaparecido) {
          this.desaparecido = desaparecido;
          this.flagLocalizado = desaparecido.ultimaOcorrencia.encontradoVivo;
        }
      });
  }

  sendInfoDialog() {
    this._dialog.open(InformationDialogComponent, {
      maxWidth: '600px',
      width: '100%',
      data: {
        ...this.desaparecido
      }
    });
  }

  handleCartaz(cartaz: ICartaz) {
    const cartazObjetos = {
      PDF: {
        label: 'Baixar cartaz em PDF',
        icon: 'icons/pdf-icon.png'
      },
      JPG: {
        label: 'Baixar cartaz em JPG',
        icon: 'icons/jpg-icon.png'
      },
      INSTA: {
        label: 'Baixar cartaz para o Instagram',
        icon: 'icons/instagram-icon.png'
      }
    };

    return cartazObjetos[cartaz.tipoCartaz.split('_')[0] as 'PDF' | 'JPG' | 'INSTA'];
  }

  generateWhatsAppLink(): string {
    const baseUrl = environment.frontEndUrl;
    const message = `PESSOA DESAPARECIDA: ${this.desaparecido.nome} de ${this.desaparecido.idade} anos, está DESAPARECIDO. Saiba mais em: ${baseUrl}/pessoa-desaparecida/${this.desaparecido.id}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?text=${encodedMessage}`;
  }

  calculateTimeDesaparecido(dtDesaparecimento: string): string {
    const disappearanceDate = new Date(dtDesaparecimento);
    const currentDate = new Date();

    // Calcula a diferença em milissegundos
    const diffTime = currentDate.getTime() - disappearanceDate.getTime();
    // Converte para dias
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Desaparecido hoje";
    } else if (diffDays === 1) {
      return "Desaparecido há 1 dia";
    } else {
      return `Desaparecido há ${diffDays} dias`;
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next(null);
    this._unsubscribeAll$.complete();
  }
}
