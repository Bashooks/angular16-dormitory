import { Component } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {
  constructor(private dialog: MatDialog) {
    
  }
  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '432px',
    });
  }
}
