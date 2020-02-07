import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  EMPLOYEES_FEATURE_KEY,
  employeesAdapter,
  EmployeesPartialState,
  EmployeesState
} from './employees.reducer';

// Lookup the 'Employees' feature state managed by NgRx
export const selectEmployeesState = createFeatureSelector<
  EmployeesPartialState,
  EmployeesState
>(EMPLOYEES_FEATURE_KEY);

const { selectAll, selectEntities } = employeesAdapter.getSelectors();

export const selectEmployeesLoading = createSelector(
  selectEmployeesState,
  (state: EmployeesState) => state.isLoading
);

export const selectAllEmployees = createSelector(
  selectEmployeesState,
  (state: EmployeesState) => selectAll(state)
);

export const selectEmployeesEntities = createSelector(
  selectEmployeesState,
  (state: EmployeesState) => selectEntities(state)
);

export const selectEmployeeId = createSelector(
  selectEmployeesState,
  (state: EmployeesState) => state.selectedEmployeeId
);

export const selectEmployee = createSelector(
  selectEmployeesEntities,
  selectEmployeeId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
