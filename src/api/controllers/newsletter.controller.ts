import {
  CreateNewsletterDto,
  NewsletterJidDto,
  NewsletterMetadataDto,
  UpdateNewsletterDto,
} from '@api/dto/newsletter.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { WAMonitoringService } from '@api/services/monitor.service';

export class NewsletterController {
  constructor(private readonly waMonitor: WAMonitoringService) {}

  public async createNewsletter({ instanceName }: InstanceDto, data: CreateNewsletterDto) {
    return await this.waMonitor.waInstances[instanceName].createNewsletter(data);
  }

  public async newsletterMetadata({ instanceName }: InstanceDto, data: NewsletterMetadataDto) {
    return await this.waMonitor.waInstances[instanceName].newsletterMetadata(data);
  }

  public async followNewsletter({ instanceName }: InstanceDto, data: NewsletterJidDto) {
    return await this.waMonitor.waInstances[instanceName].followNewsletter(data);
  }

  public async unfollowNewsletter({ instanceName }: InstanceDto, data: NewsletterJidDto) {
    return await this.waMonitor.waInstances[instanceName].unfollowNewsletter(data);
  }

  public async muteNewsletter({ instanceName }: InstanceDto, data: NewsletterJidDto) {
    return await this.waMonitor.waInstances[instanceName].muteNewsletter(data);
  }

  public async unmuteNewsletter({ instanceName }: InstanceDto, data: NewsletterJidDto) {
    return await this.waMonitor.waInstances[instanceName].unmuteNewsletter(data);
  }

  public async updateNewsletter({ instanceName }: InstanceDto, data: UpdateNewsletterDto) {
    return await this.waMonitor.waInstances[instanceName].updateNewsletter(data);
  }

  public async deleteNewsletter({ instanceName }: InstanceDto, data: NewsletterJidDto) {
    return await this.waMonitor.waInstances[instanceName].deleteNewsletter(data);
  }
}
