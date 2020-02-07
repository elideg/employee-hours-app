import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as employeesActions from './employees.actions';
import { Employee } from '@employee-hour-app/core-data';

export const EMPLOYEES_FEATURE_KEY = 'employees';

export interface EmployeesState extends EntityState<Employee> {
  selectedEmployeeId?: string | number;
  isLoading: boolean;
}

export interface EmployeesPartialState {
  readonly [EMPLOYEES_FEATURE_KEY]: EmployeesState;
}

export const employeesAdapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialState: EmployeesState = employeesAdapter.getInitialState({
  // set initial required properties
  selectedEmployeeId: null,
  isLoading: false
});

const employeesReducer = createReducer(
  initialState,
  on(employeesActions.employeeSelected, (state, { selectedEmployeeId }) =>
    Object.assign({}, state, { selectedEmployeeId })
  ),
  on(employeesActions.employeesLoaded, (state, { employees }) =>
    employeesAdapter.addAll(employees, { ...state, isLoading: false })
  ),
  on(employeesActions.employeeCreated, (state, { employee }) =>
    employeesAdapter.addOne(employee, { ...state, isLoading: false })
  ),
  on(employeesActions.employeeUpdated, (state, { employee }) =>
    employeesAdapter.upsertOne(employee, { ...state, isLoading: false })
  ),
  on(employeesActions.employeeDeleted, (state, { employee }) =>
    employeesAdapter.removeOne(employee.id, { ...state, isLoading: false })
  ),
  on(
    employeesActions.loadEmployees,
    employeesActions.createEmployee,
    employeesActions.updateEmployee,
    employeesActions.deleteEmployee,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: EmployeesState | undefined, action: Action) {
  return employeesReducer(state, action);
}
