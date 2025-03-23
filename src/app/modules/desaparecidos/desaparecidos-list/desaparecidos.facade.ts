import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DesaparecidosAPIService } from './api/desaparecidos.service';
import { IApiFilters, IDesaparecido, IListDesaparecidosResponse, IPaginacao } from './desaparecidos.types';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidosFacade {
  // Dependency Injection
  private _api = inject(DesaparecidosAPIService);

  //
  //
  // State
  private _desaparecidosList$ = new BehaviorSubject<IDesaparecido[]>([]);
  private _pagination$ = new BehaviorSubject<IPaginacao>({
    pagina: 0,
    porPagina: 16,
    totalElements: 0,
    totalPages: 0,
  });
  private _params$ = new BehaviorSubject<IApiFilters>({
    faixaIdadeFinal: 0,
    faixaIdadeInicial: 0,
    nome: '',
    sexo: '',
    status: 'DESAPARECIDO'
  });
  private _isLoadingDesaparecidosList$ = new BehaviorSubject(false);

  load() {
    const params = new HttpParams({
      fromObject: {
        ...this.params,
        pagina: this._pagination$.value.pagina,
        porPagina: this._pagination$.value.porPagina,
      }
    })

    this.getList(params);
  }

  getList(params = new HttpParams()) {
    this.isLoadingDesaparecidosList = true;
    this._api.getAll(params).subscribe({
      next: (response: IListDesaparecidosResponse) => {
        this.desaparecidosList = response.content;
        this.pagination = {
          pagina: response.number,
          porPagina: response.numberOfElements,
          totalElements: response.totalElements,
          totalPages: response.totalPages,
        }
        this.isLoadingDesaparecidosList = false;
      },
      error: () => {
        this.isLoadingDesaparecidosList = false;
      }
    });
  }

  filterList(params: IApiFilters) {
    // Efetua backup dos params no estado
    this.params = params;
    // Reseta paginação para página 0
    this._pagination$.next({
      ...this._pagination$.value,
      pagina: 0
    })

    // Cria novo httpParams
    const newParams = new HttpParams({
      fromObject: {
        ...this.params,
        pagina: this._pagination$.value.pagina,
        porPagina: this._pagination$.value.porPagina,
      }
    })

    // Efetua filtragem
    this.getList(newParams);
  }

  handlePagination(pageEvent: PageEvent) {
    const { pageSize, pageIndex } = pageEvent;

    this.pagination = {
      ...this.pagination,
      pagina: pageIndex,
      porPagina: pageSize,
    };

    const params = new HttpParams({
      fromObject: {
        ...this.params,
        pagina: this._pagination$.value.pagina,
        porPagina: this._pagination$.value.porPagina,
      }
    })

    this.getList(params);
  }

  //
  //
  // Accessors
  get desaparecidosList$() {
    return this._desaparecidosList$.asObservable();
  }

  set desaparecidosList(value: IDesaparecido[]) {
    this._desaparecidosList$.next(value);
  }

  get pagination$() {
    return this._pagination$.asObservable();
  }

  set pagination(value: IPaginacao) {
    this._pagination$.next(value);
  }

  get params$() {
    return this._params$.asObservable();
  }

  get params() {
    return this._params$.value;
  }

  set params(value: IApiFilters) {
    this._params$.next(value);
  }

  get isLoadingDesaparecidosList$() {
    return this._isLoadingDesaparecidosList$.asObservable();
  }

  set isLoadingDesaparecidosList(value: boolean) {
    this._isLoadingDesaparecidosList$.next(value);
  }
}
