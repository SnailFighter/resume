import { Component,OnInit} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Introduction } from '../../entity/introduction';
import { IntroductionService } from '../../service/app.introductionService';

import {MdCheckboxModule} from '@angular/material';



@Component({
  selector: 'add-resume',
  templateUrl: './addresume.component.html',
  styleUrls: ['./addresume.component.css']
 
})
export class AddResumeComponent {
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
  
    constructor(private http: Http,private service:IntroductionService) { }
  
    ngOnInit(): void {
    
      
      //this.service.getTest();
      // this.service.getIntroduction()
      // .then(introduction => {
      //   this.introduction = introduction,
      //   console.log("return after:"+introduction)
      // })
      this. introduction1= this.service.getIntroduction1();
      //console.log(this.introduction1.id+"^^^^^^^^^^^^^^^^^^^^^^^");

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
