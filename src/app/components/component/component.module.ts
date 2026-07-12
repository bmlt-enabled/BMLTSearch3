import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingCardComponent } from '../meeting-card/meeting-card.component';
import { MeetingListComponent } from '../meeting-list/meeting-list.component';
import { ServiceGroupNodeComponent } from '../service-group-node/service-group-node.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TidyDelimiterPipe } from 'src/app/pipes/tidy-delimiter.pipe';
import { NoSanitizePipe } from 'src/app/pipes/no-sanitize.pipe';
import { ParseFloatPipe } from 'src/app/pipes/parse-float.pipe';


@NgModule({
  declarations: [
    MeetingCardComponent,
    MeetingListComponent,
    ServiceGroupNodeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    FormsModule,
    TidyDelimiterPipe,
    NoSanitizePipe,
    ParseFloatPipe
  ],
  exports: [
    MeetingCardComponent,
    MeetingListComponent,
    ServiceGroupNodeComponent
  ]
})
export class ComponentModule { }
