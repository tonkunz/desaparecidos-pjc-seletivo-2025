import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, takeUntil } from 'rxjs';
import { DesaparecidosFacade } from './desaparecidos.facade';
import { IApiFilters, IDesaparecido } from './desaparecidos.types';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { DesaparecidoCardComponent } from './components/individuo-card/desaparecido-card.component';

@Component({
  selector: 'desaparecidos-list',
  templateUrl: './desaparecidos-list.component.html',
  imports: [
    MatProgressSpinnerModule,
    DesaparecidoCardComponent,
    FilterFormComponent,
  ]
})
export class DesaparecidosComponent implements OnInit, OnDestroy {
  // Dependency Injection
  facade = inject(DesaparecidosFacade);

  desaparecidosList: IDesaparecido[] = [];
  isLoadingList: boolean = false;

  // Unsubscriber flag
  private _unsubscribeAll$ = new Subject<void>();

  ngOnInit(): void {
    // Subscrições no estado do Facade
    this.facade.desaparecidosList$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((value: IDesaparecido[]) => {
        this.desaparecidosList = value;
      });

    this.facade.isLoadingDesaparecidosList$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((value: boolean) => {
        this.isLoadingList = value;
      });

    this.facade.load();
  }

  handleChangeFilters(formFilters: IApiFilters) {
    this.facade.filterList(formFilters);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next();
    this._unsubscribeAll$.complete();
  }
}
