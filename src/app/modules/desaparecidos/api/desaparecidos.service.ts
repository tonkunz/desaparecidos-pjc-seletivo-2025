import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { IListDesaparecidosResponse } from '../desaparecidos.types';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidosAPIService {
  private _http = inject(HttpClient);

  getAll(): Observable<IListDesaparecidosResponse> {
    return this._http.get<IListDesaparecidosResponse>(
      `${environment.apiURL}/v1/pessoas/aberto/filtro`
    );
  }

  getById(id: number) {
    return this._http.get(
      `${environment.apiURL}/v1/pessoas/${id}`
    );
  }
}
