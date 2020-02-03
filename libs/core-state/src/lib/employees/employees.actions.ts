import { createAction, props } from '@ngrx/store';

import { Employee } from '@employee-hour-app/core-data';

export const employeeSelected = createAction(
  '[EMPLOYEE] Employee Selected',
  props<{ selectedEmployeeId: string }>()
);

// Load Actions
export const loadEmployees = createAction('[EMPLOYEE] Load Employees');

export const employeesLoaded = createAction(
  '[EMPLOYEE] Employees Loaded',
  props<{ employees: Employee[] }>()
);

// Create Actions
export const createEmployee = createAction(
  '[EMPLOYEE] Create Employee',
  props<{ employee: Employee }>()
);

export const employeeCreated = createAction(
  '[EMPLOYEE] Employee Created',
  props<{ employee: Employee }>()
);

// Update Actions
export const updateEmployee = createAction(
  '[EMPLOYEE] Update Employee',
  props<{ employee: Employee }>()
);

export const employeeUpdated = createAction(
  '[EMPLOYEE] Employee Updated',
  props<{ employee: Employee }>()
);

// Delete Actions
export const deleteEmployee = createAction(
  '[EMPLOYEE] Delete Employee',
  props<{ employee: Employee }>()
);

export const employeeDeleted = createAction(
  '[EMPLOYEE] Employee Deleted',
  props<{ employee: Employee }>()
);
