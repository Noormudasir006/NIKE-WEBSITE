import { productSchema } from './product';
import { SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
};
