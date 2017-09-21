import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Introduction } from '../entity/introduction';

@Injectable()
export class IntroductionService {
    private headers = new Headers({
        'Access-Control-Allow-Origin':"*",
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'x-requested-with,Origin, X-Requested-With, Content-Type, Accept'
    });

    private introductionUrl = 'http://localhost:8080/login/test.do';  // URL to web api
    content: string;
    introduction:Introduction;

    constructor(private http: Http) { 
      
    }

    getTest(): void {
        console.log("ddddddddddddddddllllllllllllllllll");
        this.http.get(this.introductionUrl)
            .subscribe(
            data => { console.log(data),console.log("*************"+data.text())},
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.log(`Backend returned code ${err.status}, body was: ${err.error},message was ${err.message}`);
                }
            }

            )

    }

   

    getIntroduction(): Promise<Introduction> {
        return this.http.get(this.introductionUrl,{headers:this.headers})
            .toPromise()
            .then(
                response=>{response.json().data as Introduction,
                console.log("before return:"+response.json())}
            
            )
            .catch(this.handleError);

          
    }


    getIntroduction1(): Introduction {
        this.http.get(this.introductionUrl,{headers:this.headers})
           .subscribe(
                data =>{
                    this.content= data.text(),
                    console.log("%%%%%%%%%%%%&&&&&&&&&&&&&&&&%"+this.content);
                    this.introduction = JSON.parse(this.content);
                    console.log(this.introduction.id);
                    return this.introduction;
                }  
               
            )
          
           return this.introduction;
           
          
    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}