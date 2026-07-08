import { RouterBroker } from '@api/abstract/abstract.router';
import {
  CreateNewsletterDto,
  NewsletterJidDto,
  NewsletterMetadataDto,
  UpdateNewsletterDto,
} from '@api/dto/newsletter.dto';
import { newsletterController } from '@api/server.module';
import {
  createNewsletterSchema,
  newsletterJidSchema,
  newsletterMetadataSchema,
  updateNewsletterSchema,
} from '@validate/validate.schema';
import { RequestHandler, Router } from 'express';

import { HttpStatus } from './index.router';

export class NewsletterRouter extends RouterBroker {
  constructor(...guards: RequestHandler[]) {
    super();
    this.router
      .post(this.routerPath('create'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CreateNewsletterDto>({
          request: req,
          schema: createNewsletterSchema,
          ClassRef: CreateNewsletterDto,
          execute: (instance, data) => newsletterController.createNewsletter(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .post(this.routerPath('metadata'), ...guards, async (req, res) => {
        const response = await this.dataValidate<NewsletterMetadataDto>({
          request: req,
          schema: newsletterMetadataSchema,
          ClassRef: NewsletterMetadataDto,
          execute: (instance, data) => newsletterController.newsletterMetadata(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('follow'), ...guards, async (req, res) => {
        const response = await this.dataValidate<NewsletterJidDto>({
          request: req,
          schema: newsletterJidSchema,
          ClassRef: NewsletterJidDto,
          execute: (instance, data) => newsletterController.followNewsletter(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .post(this.routerPath('unfollow'), ...guards, async (req, res) => {
        const response = await this.dataValidate<NewsletterJidDto>({
          request: req,
          schema: newsletterJidSchema,
          ClassRef: NewsletterJidDto,
          execute: (instance, data) => newsletterController.unfollowNewsletter(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .post(this.routerPath('mute'), ...guards, async (req, res) => {
        const response = await this.dataValidate<NewsletterJidDto>({
          request: req,
          schema: newsletterJidSchema,
          ClassRef: NewsletterJidDto,
          execute: (instance, data) => newsletterController.muteNewsletter(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .post(this.routerPath('unmute'), ...guards, async (req, res) => {
        const response = await this.dataValidate<NewsletterJidDto>({
          request: req,
          schema: newsletterJidSchema,
          ClassRef: NewsletterJidDto,
          execute: (instance, data) => newsletterController.unmuteNewsletter(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .post(this.routerPath('update'), ...guards, async (req, res) => {
        const response = await this.dataValidate<UpdateNewsletterDto>({
          request: req,
          schema: updateNewsletterSchema,
          ClassRef: UpdateNewsletterDto,
          execute: (instance, data) => newsletterController.updateNewsletter(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })
      .delete(this.routerPath('delete'), ...guards, async (req, res) => {
        const response = await this.dataValidate<NewsletterJidDto>({
          request: req,
          schema: newsletterJidSchema,
          ClassRef: NewsletterJidDto,
          execute: (instance, data) => newsletterController.deleteNewsletter(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      });
  }

  public readonly router: Router = Router();
}
