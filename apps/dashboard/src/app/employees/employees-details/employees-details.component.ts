import { Employee } from './../../../../../../libs/core-data/src/lib/employee/employee';
import { FormGroup, NgForm, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-hour-app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.scss']
})
export class EmployeesDetailsComponent implements OnInit {
  originalName;
  currentEmployee: Employee

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set employee(value) {
    if (value) this.originalName = value.name;
      this.currentEmployee = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value)
    formDirective.resetForm()
  }
}
