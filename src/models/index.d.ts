import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum TipoSecundario {
  BASICO = "BASICO",
  PRO = "PRO"
}

export enum TipoPrimario {
  LESS2000_MMA = "LESS2000MMA",
  MORE2000_MMA = "MORE2000MMA"
}

type OfertaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestimonialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Oferta {
  readonly id: string;
  readonly TipoPrimario?: TipoPrimario | keyof typeof TipoPrimario | null;
  readonly TipoSecundario?: TipoSecundario | keyof typeof TipoSecundario | null;
  readonly salary?: string | null;
  readonly horario?: string | null;
  readonly zona?: string | null;
  readonly paradas?: string | null;
  readonly formasDePago?: string | null;
  readonly duracion?: string | null;
  readonly mercancia?: string | null;
  readonly vehiculo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Oferta, OfertaMetaData>);
  static copyOf(source: Oferta, mutator: (draft: MutableModel<Oferta, OfertaMetaData>) => MutableModel<Oferta, OfertaMetaData> | void): Oferta;
}

export declare class Note {
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Post {
  readonly id: string;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly description?: string | null;
  readonly readTime?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Testimonial {
  readonly id: string;
  readonly name?: string | null;
  readonly avatar?: string | null;
  readonly testimony?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Testimonial, TestimonialMetaData>);
  static copyOf(source: Testimonial, mutator: (draft: MutableModel<Testimonial, TestimonialMetaData>) => MutableModel<Testimonial, TestimonialMetaData> | void): Testimonial;
}