import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DesaparecidosAPIService } from './api/desaparecidos.service';
import { IPageable } from './desaparecidos.types';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidosFacade {
  // Dependency Injection
  private _api = inject(DesaparecidosAPIService);

  //
  //
  // State
  private _desaparecidosList$ = new BehaviorSubject([]);
  private _pagination$ = new BehaviorSubject<IPageable>({
    pageNumber: 0,
    pageSize: 10,
    sort: {
      unsorted: false,
      sorted: true,
      empty: false
    },
    offset: 0,
    unpaged: false,
    paged: true
  });
  private _isLoadingDesaparecidosList$ = new BehaviorSubject(false);

  load() {
    this.isLoadingDesaparecidosList = true;
    this._api.getAll().subscribe({
      next: (response) => {
        this.desaparecidosList = response;
        this.isLoadingDesaparecidosList = false;
      },
      error: () => {
        this.isLoadingDesaparecidosList = false;
      }
    });
  }

  //
  //
  // Accessors
  get desaparecidosList$() {
    return this._desaparecidosList$.asObservable();
  }

  set desaparecidosList(value: any) {
    this._desaparecidosList$.next(value);
  }

  get pagination$() {
    return this._pagination$.asObservable();
  }

  set pagination(value: any) {
    this._pagination$.next(value);
  }

  get isLoadingDesaparecidosList$() {
    return this._isLoadingDesaparecidosList$.asObservable();
  }

  set isLoadingDesaparecidosList(value: boolean) {
    this._isLoadingDesaparecidosList$.next(value);
  }

}
