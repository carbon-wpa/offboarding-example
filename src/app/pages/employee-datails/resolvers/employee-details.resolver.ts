import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { EmployeeService } from '@services';
import { EmployeeModel } from '@models';

export const employeeDetailsResolver: ResolveFn<EmployeeModel | undefined> = (route, state) => {
  const employeesService = inject(EmployeeService);
  return employeesService.getEmployeeById(route.paramMap.get('id'));
};
