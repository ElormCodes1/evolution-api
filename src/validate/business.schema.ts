import { JSONSchema7 } from 'json-schema';

export const catalogSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    number: { type: 'string' },
    limit: { type: 'number' },
  },
};

export const collectionsSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    number: { type: 'string' },
    limit: { type: 'number' },
  },
};

export const createProductSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1 },
    price: { type: 'number' },
    currency: { type: 'string', minLength: 1 },
    description: { type: 'string' },
    retailerId: { type: 'string' },
    url: { type: 'string' },
    isHidden: { type: 'boolean' },
    images: { type: 'array', items: { type: 'string' }, minItems: 1 },
  },
  required: ['name', 'price', 'currency', 'images'],
};

export const updateProductSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    productId: { type: 'string', minLength: 1 },
    name: { type: 'string', minLength: 1 },
    price: { type: 'number' },
    currency: { type: 'string', minLength: 1 },
    description: { type: 'string' },
    retailerId: { type: 'string' },
    url: { type: 'string' },
    isHidden: { type: 'boolean' },
    images: { type: 'array', items: { type: 'string' } },
  },
  required: ['productId', 'name', 'price', 'currency'],
};

export const deleteProductSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    productIds: { type: 'array', items: { type: 'string' }, minItems: 1 },
  },
  required: ['productIds'],
};

export const businessProfileSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    number: { type: 'string' },
  },
};
