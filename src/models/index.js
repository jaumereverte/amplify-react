// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TipoSecundario = {
  "BASICO": "BASICO",
  "PRO": "PRO"
};

const TipoPrimario = {
  "LESS2000_MMA": "LESS2000MMA",
  "MORE2000_MMA": "MORE2000MMA"
};

const { Oferta, Note, Post, Testimonial } = initSchema(schema);

export {
  Oferta,
  Note,
  Post,
  Testimonial,
  TipoSecundario,
  TipoPrimario
};