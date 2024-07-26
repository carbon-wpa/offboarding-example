import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '@models';
import { MatTableModule } from '@angular/material/table';
import { EmployeeStatusPipe, EquipmentPipe } from './pipes';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { EmployeeService } from '@services';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    EquipmentPipe,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatCardContent,
    EmployeeStatusPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public employees: EmployeeModel[] = [];
  public displayedColumns: string[] = ['name', 'email', 'department', 'equipment', 'status'];
  public filterValue: string = '';

  private employeesData: EmployeeModel[] = [];

  constructor(public employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) {}

  public ngOnInit(): void {
    this.getEmployeesList();
  }

  public filterEmployees(): void {
    if(!this.filterValue.length) {
      this.employees = [...this.employeesData];
      return;
    }

    this.employees = this.employeesData.filter(employee => {
      const unifiedFilterValue = this.filterValue.toLowerCase();
      return employee.name.toLowerCase().includes(unifiedFilterValue) || employee.department.toLowerCase().includes(unifiedFilterValue);
    })
  }

  public clearFilter(): void {
    this.filterValue = '';
    this.filterEmployees();
  }

  public rowSelected(row: EmployeeModel): void {
    void this.router.navigate(['employee-details', row.id]);
  }

  private getEmployeesList(): void {
    this.route.data.subscribe(data => {
      this.employeesData = data['employees'];
      this.employees = [...this.employeesData];
    });
  }

}
