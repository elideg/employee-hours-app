import { EmployeesFacade } from '@employee-hour-app/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '@employee-hour-app/core-data'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'employee-hour-app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees$: Observable<Employee[]> = this.employeesFacade.allEmployees$;
  selectedEmployee$: Observable<Employee> = this.employeesFacade.selectedEmployee$;
  form: FormGroup;

  constructor(
    private employeesFacade: EmployeesFacade,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.initForm()
    this.employeesFacade.loadEmployees();
  }

  selectEmployee(employee: Employee) {
    this.form.patchValue(employee);
    this.employeesFacade.selectEmployee(employee.id);
  }

  saveEmployees(employee: Employee) {
    if(this.form.invalid) return;
    if(employee.id) {
      this.employeesFacade.updateEmployee(employee);
    } else {
      this.employeesFacade.createEmployee(employee);
    }
  }

  cancel() {
    this.selectEmployee({ id: null} as Employee);
    this.form.reset();
  }

  deleteEmployee(employee: Employee) {
    this.employeesFacade.deleteEmployee(employee);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      location: ['', Validators.required],
      hourlyRate: ['', Validators.required]
    })
  }

}
