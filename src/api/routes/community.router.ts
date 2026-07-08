import { RouterBroker } from '@api/abstract/abstract.router';
import {
  CommunityJidDto,
  CreateCommunityDto,
  LinkGroupDto,
  UpdateCommunityDto,
} from '@api/dto/community.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { communityController } from '@api/server.module';
import {
  communityJidSchema,
  createCommunitySchema,
  linkGroupSchema,
  updateCommunitySchema,
} from '@validate/validate.schema';
import { RequestHandler, Router } from 'express';

import { HttpStatus } from './index.router';

export class CommunityRouter extends RouterBroker {
  constructor(...guards: RequestHandler[]) {
    super();
    this.router
      .post(this.routerPath('create'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CreateCommunityDto>({
          request: req,
          schema: createCommunitySchema,
          ClassRef: CreateCommunityDto,
          execute: (instance, data) => communityController.createCommunity(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .get(this.routerPath('fetchAll'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: null,
          ClassRef: InstanceDto,
          execute: (instance) => communityController.fetchAllCommunities(instance),
        });

        return res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('metadata'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJidDto>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJidDto,
          execute: (instance, data) => communityController.communityMetadata(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('linkedGroups'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJidDto>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJidDto,
          execute: (instance, data) => communityController.communityLinkedGroups(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('linkGroup'), ...guards, async (req, res) => {
        const response = await this.dataValidate<LinkGroupDto>({
          request: req,
          schema: linkGroupSchema,
          ClassRef: LinkGroupDto,
          execute: (instance, data) => communityController.linkGroup(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .post(this.routerPath('unlinkGroup'), ...guards, async (req, res) => {
        const response = await this.dataValidate<LinkGroupDto>({
          request: req,
          schema: linkGroupSchema,
          ClassRef: LinkGroupDto,
          execute: (instance, data) => communityController.unlinkGroup(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .post(this.routerPath('update'), ...guards, async (req, res) => {
        const response = await this.dataValidate<UpdateCommunityDto>({
          request: req,
          schema: updateCommunitySchema,
          ClassRef: UpdateCommunityDto,
          execute: (instance, data) => communityController.updateCommunity(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .post(this.routerPath('inviteCode'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJidDto>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJidDto,
          execute: (instance, data) => communityController.communityInviteCode(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      })
      .delete(this.routerPath('leave'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJidDto>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJidDto,
          execute: (instance, data) => communityController.leaveCommunity(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      });
  }

  public readonly router: Router = Router();
}
