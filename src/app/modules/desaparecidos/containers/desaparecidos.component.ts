import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, takeUntil } from 'rxjs';
import { DesaparecidoCardComponent } from '../components/individuo-card/desaparecido-card.component';
import { DesaparecidosFacade } from '../desaparecidos.facade';
import { IDesaparecido } from '../desaparecidos.types';

@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.component.html',
  imports: [
    MatProgressSpinnerModule,
    DesaparecidoCardComponent
  ]
})
export class DesaparecidosComponent implements OnInit, OnDestroy {
  // Dependency Injection
  private _facade = inject(DesaparecidosFacade);

  desaparecidosList: IDesaparecido[] = [];
  isLoadingList: boolean = false;

  // Unsubscriber flag
  private _unsubscribeAll$ = new Subject<void>();

  ngOnInit(): void {
    // Subscrições no estado do Facade
    this._facade.desaparecidosList$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((value: IDesaparecido[]) => {
        this.desaparecidosList = value;
      });

    this._facade.isLoadingDesaparecidosList$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((value: boolean) => {
        this.isLoadingList = value;
      });

    this._facade.load();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next();
    this._unsubscribeAll$.complete();
  }
}
