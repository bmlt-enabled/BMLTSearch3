import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-service-group-node',
    templateUrl: './service-group-node.component.html',
    styleUrls: ['./service-group-node.component.scss'],
    standalone: false
})
export class ServiceGroupNodeComponent {
  @Input() node!: { id: number; name: string; childServiceGroup?: any[] };
  @Output() areaSelected = new EventEmitter<{ id: number; name: string }>();
}
