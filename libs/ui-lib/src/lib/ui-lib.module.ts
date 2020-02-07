import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WildcardComponent } from './wildcard/wildcard.component';
import { MaterialModule } from './../../../material/src/lib/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, WildcardComponent],
  exports: [LoginComponent, WildcardComponent]
})
export class UiLibModule {}
