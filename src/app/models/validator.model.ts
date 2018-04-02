import { ValidatorFn, FormControl } from '@angular/forms';

export class Validator {
  private static readonly IS_NUMERIC_FLOAT_REGEX: RegExp = /^[+-]?\d+(\.\d+)?$/;
  private static readonly PHONE_ISRAEL_REGEX: RegExp = /^((\+972|972)|0)( |-)?([1-468-9]( |-)?\d{7}|(5|7)[0-9]( |-)?\d{7})$/;
  private static readonly WITHOUT_NUMBERS_REGEX: RegExp = /^[^\d]*$/;
  private static readonly IS_EMAIL_REGEX: RegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  private static readonly IS_ALPHA_REGEX: RegExp = /^[A-Za-z]*$/;
  private static readonly IS_ALPHA_SPACE_REGEX: RegExp = /^[A-Za-z ]*$/;
  private static readonly IS_ALPHA_NUMERIC_REGEX: RegExp = /^[A-Za-z0-9]*$/;
  private static readonly IS_ALPHA_NUMERIC_SPACE_REGEX: RegExp = /^[A-Za-z0-9 ]*$/;
  private static readonly IS_USERNAME_REGEX: RegExp = /^[A-Za-z0-9_]*$/;
  private static readonly IS_PASSWORD_REGEX: RegExp = /^[A-Za-z0-9!@#$%^&*()_]*$/;

  static required(name: string): ValidatorFn {
    return formControl => formControl.value === '' || formControl.value === null ? { 'requiredError': `${name} is required` } : null;
  }

  static minLength(len: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value.toString().length < len ? { 'minLengthError': `You need at least ${len} characters` } : null;
      }
    };
  }

  static maxLength(len: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value.toString().length > len ? { 'maxLengthError': `You need a max ${len} characters` } : null;
      }
    };
  }

  static minAndMaxLength(min: number, max: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value.toString().length > max || formControl.value.toString().length < min ?
        { 'minAndMaxLengthError': `You need to put characters between ${min} and ${max} length` } : null;
      }
    };
  }

  static minNumber(min: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value < min ? { 'minNumberError': `You need to put number upper than ${min}` } : null;
      }
    };
  }

  static maxNumber(max: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value > max ? { 'maxNumberError': `You need to put number below ${max}` } : null;
      }
    };
  }

  static minAndMaxNumbers(min: number, max: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value > max || formControl.value < min ?
        { 'minAndMaxNumbersError': `You need to put numbers between ${min} and ${max}` } : null;
      }
    };
  }

  static isNumericFloat(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_NUMERIC_FLOAT_REGEX.test(formControl.value) ? { 'isNumericFloatError': `Only numbers are accepted` } : null;
      }
    };
  }

  static isAlpha(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_ALPHA_REGEX.test(formControl.value) ? { 'isAlphaError': `Only letters are accepted` } : null;
      }
    };
  }

  static isAlphaSpace(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_ALPHA_SPACE_REGEX.test(formControl.value) ?
        { 'isAlphaSpaceError': `Only letters and spaces are accepted` } : null;
      }
    };
  }

  static isAlphaNumeric(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_ALPHA_NUMERIC_REGEX.test(formControl.value) ?
        { 'isAlphaNumericError': `Only letters and numbers are accepted` } : null;
      }
    };
  }

  static isAlphaNumericSpace(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_ALPHA_NUMERIC_SPACE_REGEX.test(formControl.value) ?
        { 'isAlphaNumericSpaceError': `Only letters, numbers and spaces are accepted` } : null;
      }
    };
  }

  static isUsername(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_USERNAME_REGEX.test(formControl.value) ?
        { 'isUsernameError': `Username is invalid` } : null;
      }
    };
  }

  static isPassword(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_PASSWORD_REGEX.test(formControl.value) ?
        { 'isPasswordError': `Password is invalid` } : null;
      }
    };
  }

  static matchPassword(password: FormControl): ValidatorFn {
    return formControl => formControl.value !== password.value ? { 'matchPasswordError': 'Passwords are not matched' } : null;
  }

  static phoneIsrael(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.PHONE_ISRAEL_REGEX.test(formControl.value) ? { 'phoneIsraelError': `Phone number is invalid` } : null;
      }
    };
  }

  static withoutNumbers(): ValidatorFn {
    return formControl => !Validator.WITHOUT_NUMBERS_REGEX.test(formControl.value) ?
    { 'withoutNumbersError': `You cant type numbers` } : null;
  }

  static isEmail(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_EMAIL_REGEX.test(formControl.value) ? { 'isEmailError': `Email is invalid` } : null;
      }
    };
  }
}
