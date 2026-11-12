import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Contact } from './contact';

@NgModule({
  declarations: [Contact],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild([{ path: '', component: Contact }])]
})
export class ContactModule { }
