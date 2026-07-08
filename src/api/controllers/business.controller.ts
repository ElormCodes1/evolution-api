import {
  BusinessProfileDto,
  CreateProductDto,
  DeleteProductDto,
  getCatalogDto,
  getCollectionsDto,
  UpdateProductDto,
} from '@api/dto/business.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { WAMonitoringService } from '@api/services/monitor.service';

export class BusinessController {
  constructor(private readonly waMonitor: WAMonitoringService) {}

  public async fetchCatalog({ instanceName }: InstanceDto, data: getCatalogDto) {
    return await this.waMonitor.waInstances[instanceName].fetchCatalog(instanceName, data);
  }

  public async fetchCollections({ instanceName }: InstanceDto, data: getCollectionsDto) {
    return await this.waMonitor.waInstances[instanceName].fetchCollections(instanceName, data);
  }

  public async createProduct({ instanceName }: InstanceDto, data: CreateProductDto) {
    return await this.waMonitor.waInstances[instanceName].createProduct(data);
  }

  public async updateProduct({ instanceName }: InstanceDto, data: UpdateProductDto) {
    return await this.waMonitor.waInstances[instanceName].updateProduct(data);
  }

  public async deleteProduct({ instanceName }: InstanceDto, data: DeleteProductDto) {
    return await this.waMonitor.waInstances[instanceName].deleteProduct(data);
  }

  public async fetchBusinessProfile({ instanceName }: InstanceDto, data: BusinessProfileDto) {
    return await this.waMonitor.waInstances[instanceName].fetchBusinessProfile(data.number ?? '');
  }
}
