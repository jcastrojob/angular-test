import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterStatusService {
  @Output() triggerFilterStatus: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
