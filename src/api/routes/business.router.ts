import { RouterBroker } from '@api/abstract/abstract.router';
import {
  BusinessProfileDto,
  CreateProductDto,
  DeleteProductDto,
  UpdateProductDto,
} from '@api/dto/business.dto';
import { NumberDto } from '@api/dto/chat.dto';
import { businessController } from '@api/server.module';
import { createMetaErrorResponse } from '@utils/errorResponse';
import {
  businessProfileSchema,
  catalogSchema,
  collectionsSchema,
  createProductSchema,
  deleteProductSchema,
  updateProductSchema,
} from '@validate/validate.schema';
import { RequestHandler, Router } from 'express';

import { HttpStatus } from './index.router';

export class BusinessRouter extends RouterBroker {
  constructor(...guards: RequestHandler[]) {
    super();
    this.router
      .post(this.routerPath('getCatalog'), ...guards, async (req, res) => {
        try {
          const response = await this.dataValidate<NumberDto>({
            request: req,
            schema: catalogSchema,
            ClassRef: NumberDto,
            execute: (instance, data) => businessController.fetchCatalog(instance, data),
          });

          return res.status(HttpStatus.OK).json(response);
        } catch (error) {
          // Log error for debugging
          console.error('Business catalog error:', error);

          // Use utility function to create standardized error response
          const errorResponse = createMetaErrorResponse(error, 'business_catalog');
          return res.status(errorResponse.status).json(errorResponse);
        }
      })

      .post(this.routerPath('getCollections'), ...guards, async (req, res) => {
        try {
          const response = await this.dataValidate<NumberDto>({
            request: req,
            schema: collectionsSchema,
            ClassRef: NumberDto,
            execute: (instance, data) => businessController.fetchCollections(instance, data),
          });

          return res.status(HttpStatus.OK).json(response);
        } catch (error) {
          // Log error for debugging
          console.error('Business collections error:', error);

          // Use utility function to create standardized error response
          const errorResponse = createMetaErrorResponse(error, 'business_collections');
          return res.status(errorResponse.status).json(errorResponse);
        }
      })

      .post(this.routerPath('createProduct'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CreateProductDto>({
          request: req,
          schema: createProductSchema,
          ClassRef: CreateProductDto,
          execute: (instance, data) => businessController.createProduct(instance, data),
        });

        return res.status(HttpStatus.CREATED).json(response);
      })

      .post(this.routerPath('updateProduct'), ...guards, async (req, res) => {
        const response = await this.dataValidate<UpdateProductDto>({
          request: req,
          schema: updateProductSchema,
          ClassRef: UpdateProductDto,
          execute: (instance, data) => businessController.updateProduct(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      })

      .post(this.routerPath('deleteProduct'), ...guards, async (req, res) => {
        const response = await this.dataValidate<DeleteProductDto>({
          request: req,
          schema: deleteProductSchema,
          ClassRef: DeleteProductDto,
          execute: (instance, data) => businessController.deleteProduct(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      })

      .post(this.routerPath('profile'), ...guards, async (req, res) => {
        const response = await this.dataValidate<BusinessProfileDto>({
          request: req,
          schema: businessProfileSchema,
          ClassRef: BusinessProfileDto,
          execute: (instance, data) => businessController.fetchBusinessProfile(instance, data),
        });

        return res.status(HttpStatus.OK).json(response);
      });
  }

  public readonly router: Router = Router();
}
