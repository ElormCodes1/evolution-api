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

export const createCommunitySchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    subject: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['subject'],
  ...isNotEmpty('subject'),
};

export const communityJidSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    jid: { type: 'string' },
  },
  required: ['jid'],
  ...isNotEmpty('jid'),
};

export const linkGroupSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    communityJid: { type: 'string' },
    groupJid: { type: 'string' },
  },
  required: ['communityJid', 'groupJid'],
  ...isNotEmpty('communityJid', 'groupJid'),
};

export const updateCommunitySchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    jid: { type: 'string' },
    subject: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['jid'],
  ...isNotEmpty('jid'),
};
