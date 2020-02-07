import { ActionReducerMap } from '@ngrx/store';

import * as fromEmployees from './employees/employees.reducer';

export interface AppState {
  employees: fromEmployees.EmployeesState;
}

export const reducers: ActionReducerMap<AppState> = {
  employees: fromEmployees.reducer,
};
