import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
    selector:'[job-holder]',
})

export class JobDirective{
   constructor(public viewContainerRef:ViewContainerRef){}
}