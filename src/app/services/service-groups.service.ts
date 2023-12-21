import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


@Injectable()
export class ServiceGroupsService {

  getApiUrlServiceGroups = 'https://aggregator.bmltenabled.org/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=bmlt_search_3_ionic';
  getApiUrlVirtServiceGroups = 'https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=bmlt_search_3_ionic';

  constructor() {}

  async getAllServiceGroups() {
    const data: HttpResponse = await CapacitorHttp.get({url: this.getApiUrlServiceGroups});
    return data;
  }

  async getAllVirtServiceGroups() {
    const response: HttpResponse = await CapacitorHttp.get({url: this.getApiUrlVirtServiceGroups});
    return response.data;
  }

}
