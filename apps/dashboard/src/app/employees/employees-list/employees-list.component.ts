import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '@employee-hour-app/core-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'employee-hour-app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  @Input() employees: Observable<Employee[]>
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
