import {
  CommunityJidDto,
  CreateCommunityDto,
  LinkGroupDto,
  UpdateCommunityDto,
} from '@api/dto/community.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { WAMonitoringService } from '@api/services/monitor.service';

export class CommunityController {
  constructor(private readonly waMonitor: WAMonitoringService) {}

  public async createCommunity({ instanceName }: InstanceDto, data: CreateCommunityDto) {
    return await this.waMonitor.waInstances[instanceName].createCommunity(data);
  }

  public async communityMetadata({ instanceName }: InstanceDto, data: CommunityJidDto) {
    return await this.waMonitor.waInstances[instanceName].communityMetadata(data);
  }

  public async fetchAllCommunities({ instanceName }: InstanceDto) {
    return await this.waMonitor.waInstances[instanceName].fetchAllCommunities();
  }

  public async communityLinkedGroups({ instanceName }: InstanceDto, data: CommunityJidDto) {
    return await this.waMonitor.waInstances[instanceName].communityLinkedGroups(data);
  }

  public async linkGroup({ instanceName }: InstanceDto, data: LinkGroupDto) {
    return await this.waMonitor.waInstances[instanceName].linkGroupToCommunity(data);
  }

  public async unlinkGroup({ instanceName }: InstanceDto, data: LinkGroupDto) {
    return await this.waMonitor.waInstances[instanceName].unlinkGroupFromCommunity(data);
  }

  public async updateCommunity({ instanceName }: InstanceDto, data: UpdateCommunityDto) {
    return await this.waMonitor.waInstances[instanceName].updateCommunity(data);
  }

  public async leaveCommunity({ instanceName }: InstanceDto, data: CommunityJidDto) {
    return await this.waMonitor.waInstances[instanceName].leaveCommunity(data);
  }

  public async communityInviteCode({ instanceName }: InstanceDto, data: CommunityJidDto) {
    return await this.waMonitor.waInstances[instanceName].communityInviteCode(data);
  }
}
