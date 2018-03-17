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

  statusClass(control): string {
    if (!(control.errors) && !(control.pristine)) {
      return 'is-valid';
    } else if ((control.errors) && !(control.pristine)) {
      return 'is-invalid';
    }
  }

  dirtyAllInputs(form): void {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsDirty({ onlySelf: true });
    });
  }

  pristineAllInputs(form): void {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsPristine({ onlySelf: true });
    });
  }

  getFormDataFromObject(obj: Object): FormData {
    const fd: FormData = new FormData();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && obj[key].constructor === Array) {
          for (let arrKey of obj[key]) {
            fd.append(key, arrKey);
          }
        } else {
          fd.append(key, obj[key]);
        }
      }
    }
    return fd;
  }
}
