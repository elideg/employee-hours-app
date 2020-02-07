import { NotifyService } from './../../../../core-data/src/lib/notify.service';
import { EmployeesFacade } from '@employee-hour-app/core-state';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as employeesActions from './employees.actions';
import { Employee, EmployeeService } from '@employee-hour-app/core-data';
import { EmployeesPartialState } from './employees.reducer';

@Injectable()
export class EmployeesEffects {
  loadEmployees$ = createEffect(() =>
    this.dataPersistence.fetch(employeesActions.loadEmployees, {
      run: (
        action: ReturnType<typeof employeesActions.loadEmployees>,
        state: EmployeesPartialState
      ) => {
        return this.employeesService.all().pipe(
          map((employees: Employee[]) => employeesActions.employeesLoaded({ employees })),
        );
      },
      onError: (action: ReturnType<typeof employeesActions.loadEmployees>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addEmployee$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(employeesActions.createEmployee, {
      run: (
        action: ReturnType<typeof employeesActions.createEmployee>,
        state: EmployeesPartialState
      ) => {
        return this.employeesService.create(action.employee).pipe(
          map((employee: Employee) => employeesActions.employeeCreated({ employee })),
          tap(() => this.notify.notification('Successfully Added a Employee'))
        );
      },
      onError: (action: ReturnType<typeof employeesActions.createEmployee>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateEmployee$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(employeesActions.updateEmployee, {
      run: (
        action: ReturnType<typeof employeesActions.updateEmployee>,
        state: EmployeesPartialState
      ) => {
        return this.employeesService.update(action.employee).pipe(
          map((employee: Employee) => employeesActions.employeeUpdated({ employee })),
          tap(() => this.notify.notification('Succesfully Updated a Employee'))
        );
      },
      onError: (action: ReturnType<typeof employeesActions.updateEmployee>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteEmployee$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(employeesActions.deleteEmployee, {
      run: (
        action: ReturnType<typeof employeesActions.deleteEmployee>,
        state: EmployeesPartialState
      ) => {
        return this.employeesService.delete(action.employee).pipe(
          map((employee: Employee) => employeesActions.employeeDeleted({ employee })),
          tap(() => this.employeeFacade.loadEmployees()),
          tap(() => this.notify.notification('Succesfully Deleted a Employee'))
        );
      },
      onError: (action: ReturnType<typeof employeesActions.deleteEmployee>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<EmployeesPartialState>,
    private employeesService: EmployeeService,
    private employeeFacade: EmployeesFacade,
    private notify: NotifyService
  ) {}
}
