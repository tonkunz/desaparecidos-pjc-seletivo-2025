import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IDesaparecidoDetails } from '@shared/types/desaparecido-details.types';
import { Subject, takeUntil } from 'rxjs';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { DesaparecidoCardComponent } from './components/individuo-card/desaparecido-card.component';
import { DesaparecidosFacade } from './desaparecidos.facade';
import { IApiFilters, IPaginacao } from './desaparecidos.types';
import { EstatisticasComponent } from '@shared/components/estatisticas/estatisticas.component';
import { ScrollTopBtnComponent } from '@shared/components/scroll-top-btn/scroll-top-btn.component';

@Component({
  selector: 'desaparecidos-list',
  templateUrl: './desaparecidos-list.component.html',
  imports: [
    MatProgressSpinnerModule,
    DesaparecidoCardComponent,
    FilterFormComponent,
    MatPaginatorModule,
    EstatisticasComponent,
    ScrollTopBtnComponent
  ]
})
export class DesaparecidosComponent implements OnInit, OnDestroy {
  // Dependency Injection
  facade = inject(DesaparecidosFacade);

  desaparecidosList: IDesaparecidoDetails[] = [];
  pagination!: IPaginacao;
  isLoadingList: boolean = false;

  // Unsubscriber flag
  private _unsubscribeAll$ = new Subject<void>();

  ngOnInit(): void {
    // Subscrições no estado do Facade
    this.facade.desaparecidosList$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((value: IDesaparecidoDetails[]) => {
        this.desaparecidosList = value;
      });

    this.facade.isLoadingDesaparecidosList$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((value) => {
        const { isLoading, mode } = value;
        this.isLoadingList = isLoading;

        if (mode === 'filter' || mode === 'paging') {
          this.scrollToListagem();
        }
      });

    this.facade.pagination$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((value: IPaginacao) => {
        this.pagination = value;
      });

    this.facade.load();
  }

  handleChangeFilters(formFilters: IApiFilters) {
    this.facade.filterList(formFilters);
  }

  handlePageEvent(e: PageEvent) {
    this.facade.handlePagination(e);
  }

  scrollToListagem() {
    const listagemSection = document.getElementById('listagem');
    if (listagemSection)
      listagemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next();
    this._unsubscribeAll$.complete();
  }
}
