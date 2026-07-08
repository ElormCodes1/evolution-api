export class CreateCommunityDto {
  subject: string;
  description?: string;
}

export class CommunityJidDto {
  jid: string;
}

export class LinkGroupDto {
  communityJid: string;
  groupJid: string;
}

export class UpdateCommunityDto {
  jid: string;
  subject?: string;
  description?: string;
}
