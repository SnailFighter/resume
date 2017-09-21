import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Directive,ViewContainerRef ,ViewChild, ComponentFactoryResolver} from '@angular/core';

import { HttpModule,JsonpModule }    from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import {HashLocationStrategy , LocationStrategy} from '@angular/common';


import { AppRoutingModule } from './app-route';

import { MaterialModule } from '@angular/material';
import {MdButtonModule, MdCheckboxModule,MdExpansionModule } from '@angular/material';
import {MdInputModule,MdSidenavModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdListModule} from '@angular/material';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { AddResumeComponent } from './component/detailview/addresume.component';
import { ResumeCardComponent } from './component/card/resume.card.component';
import { CardlistCompnent } from './component/resumelist/cardlist.component';
import { PersonComponent } from './component/center/person.component';
import { JobComponent } from './component/center/childcomponent/job.component';

import { IntroductionService } from './service/app.introductionService';


 
@NgModule({
  declarations: [
    AppComponent,
    AddResumeComponent,
    ResumeCardComponent,
    CardlistCompnent,
    PersonComponent,
    JobComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdExpansionModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule
    
  ],
  providers: [IntroductionService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  //entryComponents: [ JobComponent ],
  bootstrap: [AppComponent],

})
export class AppModule { }
