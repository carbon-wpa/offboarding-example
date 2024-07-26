import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel, EmployeeStatus } from '@models';

@Pipe({
  name: 'employeeStatus',
  standalone: true
})
export class EmployeeStatusPipe implements PipeTransform {

  transform(employee: EmployeeModel, terminatedEmployees: string[] = []): EmployeeStatus | undefined {
    if (!employee) {
      return;
    }

    if (terminatedEmployees.includes(employee.id)) {
      return EmployeeStatus.INACTIVE
    }

    return employee.status;
  }

}
