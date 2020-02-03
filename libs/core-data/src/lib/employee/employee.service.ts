import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://employee-json-server.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  model = 'employees';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(employee: Employee) {
    return this.httpClient.patch(this.getUrl(), employee);
  }

  update(employee: Employee) {
    return this.httpClient.put(this.getUrlForId(employee.id), employee);
  }

  delete(employee: Employee) {
    return this.httpClient.delete(this.getUrlForId(employee.id))
  }
}
