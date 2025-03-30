import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDesaparecidoDetails } from '@shared/types/desaparecido-details.types';
import { environment } from '@env/environment';

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

  sendInformation(files: File[], params: HttpParams) {
    const form = new FormData();
    files.forEach((file) => {
      form.append('files', file);
    });

    return this._http.post(`${environment.apiURL}/v1/ocorrencias/informacoes-desaparecido`,
      form,
      {
        params,
      }
    );

  }
}
