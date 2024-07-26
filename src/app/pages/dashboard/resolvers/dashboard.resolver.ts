import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { EmployeeService } from '@services';
import { EmployeeModel } from '@models';

export const dashboardResolver: ResolveFn<EmployeeModel[]> = (route, state) => {
  const employeesService = inject(EmployeeService);
  return employeesService.getEmployees();
};
