import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromEmployees from './employees.reducer';
import * as employeesActions from './employees.actions';
import {
  selectAllEmployees,
  selectEmployee,
  selectEmployeesLoading
} from './employees.selectors';
import { Employee } from '@employee-hour-app/core-data';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesFacade {
  allEmployees$ = this.store.pipe(
    select(selectAllEmployees)
    );
  selectedEmployee$ = this.store.pipe(select(selectEmployee));
  employeeLoading$ = this.store.pipe(select(selectEmployeesLoading));

  constructor(private store: Store<fromEmployees.EmployeesPartialState>) {}

  selectEmployee(selectedEmployeeId: string) {
    this.dispatch(employeesActions.employeeSelected({ selectedEmployeeId }));
  }

  loadEmployees() {
    this.dispatch(employeesActions.loadEmployees());
  }

  createEmployee(employee: Employee) {
    this.dispatch(employeesActions.createEmployee({ employee }));
  }

  updateEmployee(employee: Employee) {
    this.dispatch(employeesActions.updateEmployee({ employee }));
  }

  deleteEmployee(employee: Employee) {
    this.dispatch(employeesActions.deleteEmployee({ employee }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
