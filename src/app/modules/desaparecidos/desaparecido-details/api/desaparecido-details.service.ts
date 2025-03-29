import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDesaparecidoDetails } from '../desaparecido-details.types';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidoDetailsAPIService {
  // Dependecy Injection
  private _http = inject(HttpClient);

  getById(id: number): Observable<IDesaparecidoDetails> {
    return this._http.get<IDesaparecidoDetails>(
      `${environment.apiURL}/v1/pessoas/${id}`
    );
  }
}
