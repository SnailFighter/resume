import {Component,Input} from '@angular/core';
import { Introduction } from '../../entity/introduction';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'resume-card',
  templateUrl: 'resume.card.component.html',
  styleUrls: ['resume.card.component.css'],
})
export class ResumeCardComponent {
  ins:Introduction;
  
  @Input() item:Introduction
}