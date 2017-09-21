import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardlistCompnent } from './component/resumelist/cardlist.component';
import { AddResumeComponent } from './component/detailview/addresume.component';
import { PersonComponent } from './component/center/person.component';


const routes: Routes = [
  { path: 'views',component: CardlistCompnent },
  { path: '', redirectTo: '/views', pathMatch: 'full' },
  { path: 'addresume',component: AddResumeComponent },
  { path: 'person',component: PersonComponent },
 
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
