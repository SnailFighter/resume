import {Component} from '@angular/core';


import { JobDirective } from './directive/job.directive';

import { JobItem } from './../../entity/job-item'


/**
 * @title Expansion panel as accordion
 */


@Component({
  selector: 'person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent {
  step = 0;
  index=1;
  idprd='';
  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addJob(){
    var id="tr"+this.index;

    var nodeContent = document.createElement("tr");
    nodeContent.setAttribute("id",id);
    console.log(document.getElementById('tr0').innerHTML);
    nodeContent.innerHTML=document.getElementById('tr0').innerHTML;

    var bn = nodeContent.getElementsByTagName("button");
    bn[0].onclick=function(){
      document.getElementById(id).remove();
    }
 
    document.getElementById('table').appendChild(nodeContent);

    console.log(document.getElementById("tr0").innerHTML);
    this.index++;


  }
  clear(id){
    document.getElementById(id).remove();
  }
}