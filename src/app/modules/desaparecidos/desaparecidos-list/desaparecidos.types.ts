import { IDesaparecidoDetails } from "@shared/types/desaparecido-details.types";

export interface IListDesaparecidosResponse {
  content: IDesaparecidoDetails[];
  totalElements: number;
  totalPages: number;
  pageable: IPageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  sort: ISort;
  empty: boolean;
}

export interface IPageable {
  pageNumber: number;
  pageSize: number;
  sort: ISort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface ISort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

export interface IPaginacao {
  pagina: number;
  porPagina: number;
  totalElements: number;
  totalPages: number;
}

export interface IApiFilters {
  nome: string;
  faixaIdadeInicial: number;
  faixaIdadeFinal: number;
  sexo: 'MASCULINO' | 'FEMININO' | '';
  status: 'DESAPARECIDO' | 'LOCALIZADO';
}
