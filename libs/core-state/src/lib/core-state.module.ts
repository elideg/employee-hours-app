import { EmployeesEffects } from './employees/employees.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';

import { CoreDataModule } from '@employee-hour-app/core-data';
import { reducers } from '.';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      EmployeesEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'employee-hour-app Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
