import { inject, Injectable } from '@angular/core';
import { DesaparecidoDetailsAPIService } from './api/desaparecido-details.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDesaparecidoDetails } from '@shared/types/desaparecido-details.types';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidoDetailsFacadeService {
  // Dependecy Injection
  private _api = inject(DesaparecidoDetailsAPIService);

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
      error: () => {
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
