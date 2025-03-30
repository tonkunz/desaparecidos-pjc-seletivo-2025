export interface IDesaparecidoDetails {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto: string;
  ultimaOcorrencia: IUltimaOcorrencia;
}

export interface IUltimaOcorrencia {
  dtDesaparecimento: string;
  dataLocalizacao: string;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: IOcorrenciaEntrevDesapDTO;
  listaCartaz: ICartaz[];
  ocoId: number;
}

export interface ICartaz {
  urlCartaz: string;
  tipoCartaz: 'PDF_DESAPARECIDO' | 'PDF_LOCALIZADO' | 'JPG_DESAPARECIDO' | 'JPG_LOCALIZADO' | 'INSTA_DESAPARECIDO' | 'INSTA_LOCALIZADO';
}

export interface IOcorrenciaEntrevDesapDTO {
  informacao: string;
  vestimentasDesaparecido: string;
}
