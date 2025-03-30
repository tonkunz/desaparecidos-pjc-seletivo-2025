import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IDesaparecidoDetails } from '@shared/types/desaparecido-details.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomDesaparecidoService {
  private _http = inject(HttpClient);

  getRandomDesaparecido(registros = 1): Observable<IDesaparecidoDetails[]> {
    const params = new HttpParams().append('registros', registros);

    return this._http.get<IDesaparecidoDetails[]>(
      `${environment.apiURL}/v1/pessoas/aberto/dinamico`,
      { params }
    )
  }
}
