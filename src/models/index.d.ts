import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestimonialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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