import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstatistica } from './estatisticas.types';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EstatisticasService {
  private _http = inject(HttpClient);

  getEstatisticas(): Observable<IEstatistica> {
    return this._http.get<IEstatistica>(`${environment.apiURL}/v1/pessoas/aberto/estatistico`);
  }
}
