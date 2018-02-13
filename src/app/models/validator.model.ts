import { ValidatorFn, FormControl } from '@angular/forms';

export class Validator {
  static required(name: string): ValidatorFn {
    return formControl => formControl.value === '' || formControl.value === null ? { 'requiredError': `${name} is required` } : null;
  }

  static minLength(len: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value.toString().length <= len ? { 'minLength': `You need at least ${len} numbers` } : null;
      }
    };
  }

  static maxLength(len: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value.toString().length >= len ? { 'maxLength': `You need a max ${len} numbers` } : null;
      }
    };
  }

  static isNumericFloat() {
    const reg: RegExp = /^[+-]?\d+(\.\d+)?$/;

    return (formControl) => {
      if (formControl.value !== null) {
        return !reg.test(formControl.value) ? { 'isNumericFloatError': `Only numbers are accepted` } : null;
      }
    };
  }

  static matchPassword(password: FormControl): ValidatorFn {
    return formControl => formControl.value !== password.value ? { 'matchPasswordError': 'Passwords are not matched' } : null;
  }

  static phoneIsrael(): ValidatorFn {
    const reg: RegExp = /^((\+972|972)|0)( |-)?([1-468-9]( |-)?\d{7}|(5|7)[0-9]( |-)?\d{7})$/;

    return (formControl) => {
      if (formControl.value !== null) {
        return !reg.test(formControl.value) ? { 'phoneIsraelError': `Phone number is invalid` } : null;
      }
    };
  }

  static withoutNumbers(): ValidatorFn {
    const reg: RegExp = /^[^\d]*$/;
    return formControl => !reg.test(formControl.value) ? { 'withoutNumbersError': `You cant type numbers` } : null;
  }
}
