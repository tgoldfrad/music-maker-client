import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface ErrorDialogData {
  message: string;
  title?: string;
  type?: 'error' | 'warning' | 'info';
  details?: string;
}

@Component({
  selector: 'app-message-dialog',
  standalone: true,
  imports: [NgClass,MatIcon,MatButtonModule],
  templateUrl: './message-dialog.component.html',
  styleUrl: './message-dialog.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.95)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void => *', animate('200ms ease-out')),
      transition('* => void', animate('150ms ease-in'))
    ])
  ]
})
export class MessageDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorDialogData
  ) {}

  // close(): void {
  //   this.dialogRef.close();
  // }

  // get dialogTitle(): string {
  //   return this.data.title || this.getDefaultTitle();
  // }

  // get dialogIcon(): string {
  //   switch (this.data.type) {
  //     case 'warning':
  //       return 'warning';
  //     case 'info':
  //       return 'info';
  //     case 'error':
  //     default:
  //       return 'error';
  //   }
  // }

  // get iconClass(): string {
  //   switch (this.data.type) {
  //     case 'warning':
  //       return 'warning-icon';
  //     case 'info':
  //       return 'info-icon';
  //     case 'error':
  //     default:
  //       return 'error-icon';
  //   }
  // }

  // private getDefaultTitle(): string {
  //   switch (this.data.type) {
  //     case 'warning':
  //       return 'Warning';
  //     case 'info':
  //       return 'Information';
  //     case 'error':
  //     default:
  //       return 'Error';
  //   }
  // }
  ngOnInit(): void {
    // Add keyboard listener for Escape key
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === 'Escape') {
        this.close();
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  get dialogTitle(): string {
    return this.data.title || this.getDefaultTitle();
  }

  get dialogIcon(): string {
    switch (this.data.type) {
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      case 'error':
      default:
        return 'error';
    }
  }

  get iconClass(): string {
    switch (this.data.type) {
      case 'warning':
        return 'warning-icon';
      case 'info':
        return 'info-icon';
      case 'error':
      default:
        return 'error-icon';
    }
  }

  private getDefaultTitle(): string {
    switch (this.data.type) {
      case 'warning':
        return 'Warning';
      case 'info':
        return 'Information';
      case 'error':
      default:
        return 'Error';
    }
  }
}




