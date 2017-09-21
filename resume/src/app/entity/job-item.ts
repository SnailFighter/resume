import { Type } from '@angular/core';

export class JobItem {
  constructor(public component: Type<any>, public data: any) {}
}