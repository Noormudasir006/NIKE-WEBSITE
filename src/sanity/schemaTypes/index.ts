// import { type SchemaTypeDefinition } from 'sanity'

// import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'
import { productSchema } from './product'

export const schema: { types } = {
  types: [productSchema],
}
