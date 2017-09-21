import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { JobDirective } from '../directive/job.directive';

import { JobItem } from '../../../entity/job-item'

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'job',
  templateUrl: 'job.component.html',
  styleUrls: ['job.component.css']
})
export class JobComponent implements AfterViewInit,OnDestroy{
  step = 0;
  @Input() jobs:JobItem[];
  //当前索引
  @ViewChild(JobDirective) jobHolder:JobDirective;

  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(){

  }

  ngOnDestroy(){

  }

  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}