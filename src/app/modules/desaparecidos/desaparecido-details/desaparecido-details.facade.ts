import { inject, Injectable } from '@angular/core';
import { DesaparecidoDetailsAPIService } from './api/desaparecido-details.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDesaparecidoDetails } from '@shared/types/desaparecido-details.types';
import { AlertService } from '@shared/components/alert/alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidoDetailsFacadeService {
  // Dependecy Injection
  private _api = inject(DesaparecidoDetailsAPIService);
  private _alert = inject(AlertService);
  private _router = inject(Router);

  //
  //
  //
  private _desaparecidoDetails$ = new BehaviorSubject<IDesaparecidoDetails | null>(null);
  private _isLoading = new BehaviorSubject<boolean>(false);

  //
  //
  // Methods
  load(id: number) {
    this.isLoading = true;
    this._api.getById(id).subscribe({
      next: (response: IDesaparecidoDetails) => {
        this.desaparecidoDetails = response;
        this.isLoading = false;
      },
      error: (err) => {
        this._alert.error('Erro ao buscar detalhes do desaparecido...');
        if (err?.status === 404) {
          this._router.navigate(['/not-found']);
        }
        this.isLoading = false;
      }
    });
  }

  //
  //
  // Getters and Setters
  get desaparecidoDetails$(): Observable<IDesaparecidoDetails | null> {
    return this._desaparecidoDetails$.asObservable();
  }

  set desaparecidoDetails(value: IDesaparecidoDetails | null) {
    this._desaparecidoDetails$.next(value);
  }

  get isLoading$(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  set isLoading(value: boolean) {
    this._isLoading.next(value);
  }
}
