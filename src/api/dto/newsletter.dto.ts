export class CreateNewsletterDto {
  name: string;
  description?: string;
}

export class NewsletterJidDto {
  jid: string;
}

export class NewsletterMetadataDto {
  // 'jid' for a @newsletter id, or 'invite' for an invite code/link.
  type: 'jid' | 'invite';
  key: string;
}

export class UpdateNewsletterDto {
  jid: string;
  name?: string;
  description?: string;
}
