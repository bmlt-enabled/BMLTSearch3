import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class TomatoFormatsService {

  tomatoBMLT = 'https://tomato.bmltenabled.org/main_server/client_interface/json/?switcher=GetFormats&show_all=1&format_ids=';

  constructor(private httpCors: HTTP) {}

  async getFormatNamesByID(uniqueIDs: Set<string>, language) {
    const formatNamesByID = {};
    
    const formatsApi = this.tomatoBMLT + Array.from(uniqueIDs).join(",");
    const data = await this.httpCors.get(formatsApi, {}, {});
    const jsonData = JSON.parse(data.data);

    for (const format of jsonData) {
      if (format.lang === language || (format.lang === 'en' && !formatNamesByID[format.id])) {
        formatNamesByID[format.id] = format.name_string;
      }
    }

    return formatNamesByID;
  }

  setExplodedFormatsOnMeetingList(meetingList, formatLanguage) {
    const uniqueFormatIDs = new Set<string>();
    for (const meeting of meetingList) {
      for (const formatID of meeting?.format_shared_id_list.split(",") || []) {
        uniqueFormatIDs.add(formatID);
      }
    }

    this.getFormatNamesByID(uniqueFormatIDs, formatLanguage).then((formatNamesByID) => {
      for (const meeting of meetingList) {
        let formats = '';
        for (const formatID of meeting?.format_shared_id_list?.split(",") || []) {
          const name = formatNamesByID[formatID];
          if (name) {
            formats = `${formats}${name}. `
          }
        }
        meeting.formats_exploded = formats.trim();
      }
    });
  }
}
