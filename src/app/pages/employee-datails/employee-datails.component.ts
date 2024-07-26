import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel, TerminationModel } from '@models';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { TerminationDialogComponent } from './components';
import { take } from 'rxjs';
import { EmployeeService } from '@services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-datails',
  standalone: true,
  imports: [
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatButton,
    MatCard,
    MatCardContent
  ],
  templateUrl: './employee-datails.component.html',
  styleUrl: './employee-datails.component.scss'
})
export class EmployeeDatailsComponent implements OnInit {

  public employee: EmployeeModel | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private employeeService: EmployeeService) {
  }

  public ngOnInit(): void {
    this.getEmployeeDetails();
  }

  public terminateEmployee(): void {
    const dialogRef = this.dialog.open(TerminationDialogComponent, {
      data: {employee: this.employee},
    });

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe((formValue: TerminationModel | null) => {
        if(!formValue) {
          return;
        }
        //todo make api call
        // this.employeeService.terminateEmployee(formValue)
        if(this.employee?.id) {
          this.employeeService.terminatedEmployees.push(this.employee.id);
          this.snackBar.open('Employee has been terminated', 'Close');
          void this.router.navigate(['dashboard']);
        }
      });
  }

  private getEmployeeDetails(): void {
    this.route.data.subscribe(data => {
      this.employee = data['employee'];
    });
  }
}
