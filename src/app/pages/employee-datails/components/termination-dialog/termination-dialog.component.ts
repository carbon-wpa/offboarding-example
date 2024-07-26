import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-termination-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './termination-dialog.component.html',
  styleUrl: './termination-dialog.component.scss'
})
export class TerminationDialogComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<TerminationDialogComponent>) {
    this.form = this.fb.group({
      receiver: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      streetLine: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      notes: ['']
    });
  }

  public confirm(): void {
    this.dialogRef.close(this.form.value);
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
