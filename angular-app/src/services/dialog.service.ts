import { Injectable } from '@angular/core';
import { ErrorDialogData, MessageDialogComponent } from '../components/message-dialog/message-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  showError(message: string, title?: string): void {
    this.openDialog({
      message,
      title: title || 'Error',
      type: 'error'
    });
  }

  showWarning(message: string, title?: string): void {
    this.openDialog({
      message,
      title: title || 'Warning',
      type: 'warning'
    });
  }

  showInfo(message: string, title?: string): void {
    this.openDialog({
      message,
      title: title || 'Information',
      type: 'info'
    });
  }

  // handleHttpError(error: any): void {
  //   let errorTitle = 'Error';
  //   let errorMessage = 'An unexpected error occurred';
  //   let errorDetails = '';
    
  //   if (error.error instanceof ErrorEvent) {
  //     errorTitle = 'Client Error';
  //     errorMessage = `${error.error.message}`;
  //   } else if (error.status) {
  //     switch (error.status) {
  //       case 400:
  //         errorTitle = 'Bad Request';
  //         errorMessage = 'The request was invalid or cannot be processed';
  //         break;
  //       case 401:
  //         errorTitle = 'Unauthorized';
  //         errorMessage = 'You need to be authenticated to perform this action';
  //         break;
  //       case 403:
  //         errorTitle = 'Forbidden';
  //         errorMessage = 'You do not have permission to access this resource';
  //         break;
  //       case 404:
  //         errorTitle = 'Not Found';
  //         errorMessage = 'The requested resource could not be found';
  //         break;
  //       case 408:
  //         errorTitle = 'Request Timeout';
  //         errorMessage = 'The server timed out waiting for the request';
  //         break;
  //       case 409:
  //         errorTitle = 'Conflict';
  //         errorMessage = 'The request could not be completed due to a conflict';
  //         break;
  //       case 422:
  //         errorTitle = 'Validation Error';
  //         errorMessage = 'The submitted data failed validation';
  //         break;
  //       case 429:
  //         errorTitle = 'Too Many Requests';
  //         errorMessage = 'You have sent too many requests in a given amount of time';
  //         break;
  //       case 500:
  //         errorTitle = 'Server Error';
  //         errorMessage = 'The server encountered an unexpected condition';
  //         break;
  //       case 502:
  //         errorTitle = 'Bad Gateway';
  //         errorMessage = 'The server received an invalid response from the upstream server';
  //         break;
  //       case 503:
  //         errorTitle = 'Service Unavailable';
  //         errorMessage = 'The server is currently unavailable';
  //         break;
  //       case 504:
  //         errorTitle = 'Gateway Timeout';
  //         errorMessage = 'The server did not receive a timely response from the upstream server';
  //         break;
  //       default:
  //         errorTitle = `Error ${error.status}`;
  //         errorMessage = error.statusText || 'An error occurred with the server';
  //     }
      
  //     if (error.error && typeof error.error === 'object' && error.error.message) {
  //       errorMessage = error.error.message;
  //     }
      
  //     // Build error details
  //     errorDetails = `Status: ${error.status}\n`;
  //     errorDetails += `URL: ${error.url || 'Unknown'}\n`;
  //     errorDetails += `Time: ${new Date().toISOString()}\n`;
      
  //     if (error.error && typeof error.error === 'object') {
  //       if (error.error.details) {
  //         errorDetails += `Details: ${error.error.details}\n`;
  //       }
  //       if (error.error.code) {
  //         errorDetails += `Error Code: ${error.error.code}\n`;
  //       }
  //     }
  //   }
    
  //   this.openDialog({
  //     message: errorMessage,
  //     title: errorTitle,
  //     type: 'error',
  //     details: errorDetails
  //   });
  // }

  // private openDialog(data: ErrorDialogData): void {
  //   this.dialog.open(MessageDialogComponent, {
  //     width: '400px',
  //     data,
  //     panelClass: ['error-dialog-panel', `${data.type || 'error'}-dialog`],
  //     disableClose: true
  //   });
  // }
  handleHttpError(error: any): void {
    let errorTitle = 'Error';
    let errorMessage = 'An unexpected error occurred';
    let errorDetails = '';
    
    if (error.error instanceof ErrorEvent) {
      errorTitle = 'Client Error';
      errorMessage = `${error.error.message}`;
    } else if (error.status) {
      switch (error.status) {
        case 400:
          errorTitle = 'Bad Request';
          errorMessage = 'The request was invalid or cannot be processed';
          break;
        case 401:
          errorTitle = 'Unauthorized';
          errorMessage = 'You need to be authenticated to perform this action';
          break;
        case 403:
          errorTitle = 'Forbidden';
          errorMessage = 'You do not have permission to access this resource';
          break;
        case 404:
          errorTitle = 'Not Found';
          errorMessage = 'The requested resource could not be found';
          break;
        case 408:
          errorTitle = 'Request Timeout';
          errorMessage = 'The server timed out waiting for the request';
          break;
        case 409:
          errorTitle = 'Conflict';
          errorMessage = 'The request could not be completed due to a conflict';
          break;
        case 422:
          errorTitle = 'Validation Error';
          errorMessage = 'The submitted data failed validation';
          break;
        case 429:
          errorTitle = 'Too Many Requests';
          errorMessage = 'You have sent too many requests in a given amount of time';
          break;
        case 500:
          errorTitle = 'Server Error';
          errorMessage = 'The server encountered an unexpected condition';
          break;
        case 502:
          errorTitle = 'Bad Gateway';
          errorMessage = 'The server received an invalid response from the upstream server';
          break;
        case 503:
          errorTitle = 'Service Unavailable';
          errorMessage = 'The server is currently unavailable';
          break;
        case 504:
          errorTitle = 'Gateway Timeout';
          errorMessage = 'The server did not receive a timely response from the upstream server';
          break;
        default:
          errorTitle = `Error ${error.status}`;
          errorMessage = error.statusText || 'An error occurred with the server';
      }
      
      if (error.error && typeof error.error === 'object' && error.error.message) {
        errorMessage = error.error.message;
      }
      
      // Build error details
      errorDetails = `Status: ${error.status}\n`;
      errorDetails += `URL: ${error.url || 'Unknown'}\n`;
      errorDetails += `Time: ${new Date().toISOString()}\n`;
      
      if (error.error && typeof error.error === 'object') {
        if (error.error.details) {
          errorDetails += `Details: ${error.error.details}\n`;
        }
        if (error.error.code) {
          errorDetails += `Error Code: ${error.error.code}\n`;
        }
      }
    }
    
    this.openDialog({
      message: errorMessage,
      title: errorTitle,
      type: 'error',
      details: errorDetails
    });
  }

  private openDialog(data: ErrorDialogData): void {
    this.dialog.open(MessageDialogComponent, {
      width: '420px',
    maxWidth: '90vw',
    maxHeight: '80vh', // הגבלת גובה מקסימלי
    data,
    panelClass: ['error-dialog-panel', `${data.type || 'error'}-dialog`],
    disableClose: true,
    backdropClass: 'error-dialog-backdrop',
    autoFocus: false
    });
  }
}
