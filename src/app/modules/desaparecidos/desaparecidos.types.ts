export interface IListDesaparecidosResponse {
  content: IDesaparecido[];
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

export interface IDesaparecido {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto?: string;
  ultimaOcorrencia: IUltimaOcorrencia;
}

export interface IUltimaOcorrencia {
  dtDesaparecimento: string;
  dataLocalizacao?: any;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: IOcorrenciaEntrevDesapDTO;
  listaCartaz?: any;
  ocoId: number;
}

export interface IOcorrenciaEntrevDesapDTO {
  informacao?: string;
  vestimentasDesaparecido: string;
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

export interface IApiFilters {
  nome: string;
  faixaIdadeInicial: number;
  faixaIdadeFinal: number;
  sexo: 'MASCULINO' | 'FEMININO' | '';
  status: 'DESAPARECIDO' | 'LOCALIZADO';
}
