import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListDesaparecidosResponse } from '../desaparecidos.types';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidosAPIService {
  private _http = inject(HttpClient);

  getAll(params: HttpParams): Observable<IListDesaparecidosResponse> {
    return this._http.get<IListDesaparecidosResponse>(
      `${environment.apiURL}/v1/pessoas/aberto/filtro`,
      {
        params
      }
    );
  }
}
