import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { ResumeCardComponent } from './component/card/resume.card.component';

import { Introduction } from './entity/introduction';
import { IntroductionService } from './service/app.introductionService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'app';

  private headers = new Headers({
    'Access-Control-Allow-Origin':"*",
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'x-requested-with,Origin, X-Requested-With, Content-Type, Accept'
  });

  private introductionUrl = 'http://localhost:8080/login/test.do';  // URL to web api

  introduction: Introduction;
  introduction1: Introduction;
  content : string;
  
    constructor(
        private http: Http,
        private service:IntroductionService,
        private route: ActivatedRoute,
        private location: Location
      ) { }
  
    ngOnInit(): void {
    
      
      //this.service.getTest();
      // this.service.getIntroduction()
      // .then(introduction => {
      //   this.introduction = introduction,
      //   console.log("return after:"+introduction)
      // })
      //this. introduction1= this.service.getIntroduction1();
      //console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~"+this.introduction1.img);
      this.http.get(this.introductionUrl,{headers:this.headers}) 
      .subscribe(
        data =>{
            this.content= data.text(),
            console.log("%%%%%%%%%%%%%"+this.content),
            this.introduction = JSON.parse(this.content);
            console.log(this.introduction.name);
        }  
       
    )

     //console.log("@@@@@@@@@@@@@@@@"+this.content);
      
        
    }
}
