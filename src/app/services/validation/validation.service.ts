import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  checkValid(control): boolean {
    if (!(control.errors) && !(control.pristine)) {
      return true;
    } else {
      return false;
    }
  }

  checkInvalid(control): boolean {
    if ((control.errors) && !(control.pristine)) {
      return true;
    } else {
      return false;
    }
  }

  statusClass(control) {
    if (!(control.errors) && !(control.pristine)) {
      return 'is-valid';
    } else if ((control.errors) && !(control.pristine)) {
      return 'is-invalid';
    }
  }

}
