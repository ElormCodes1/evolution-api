import { JSONSchema7 } from 'json-schema';
import { v4 } from 'uuid';

const isNotEmpty = (...propertyNames: string[]): JSONSchema7 => {
  const properties = {};
  propertyNames.forEach(
    (property) =>
      (properties[property] = {
        minLength: 1,
        description: `The "${property}" cannot be empty`,
      }),
  );
  return {
    if: {
      propertyNames: {
        enum: [...propertyNames],
      },
    },
    then: {
      properties,
    },
  };
};

export const createNewsletterSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['name'],
  ...isNotEmpty('name'),
};

export const newsletterJidSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    jid: { type: 'string' },
  },
  required: ['jid'],
  ...isNotEmpty('jid'),
};

export const newsletterMetadataSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['jid', 'invite'] },
    key: { type: 'string' },
  },
  required: ['type', 'key'],
  ...isNotEmpty('key'),
};

export const updateNewsletterSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    jid: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['jid'],
  ...isNotEmpty('jid'),
};
