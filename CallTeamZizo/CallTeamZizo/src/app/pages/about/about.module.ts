import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { About } from './about';

@NgModule({
  declarations: [About],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: About }])]
})
export class AboutModule { }
