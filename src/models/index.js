// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Post, Testimonial } = initSchema(schema);

export {
  Note,
  Post,
  Testimonial
};