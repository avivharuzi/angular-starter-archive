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
  private static readonly IS_URL_REGEX: RegExp = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/;
  private static readonly IS_SLUG_REGEX: RegExp = /^[a-z][a-z\-]*[a-z]$/;

  static required(name: string): ValidatorFn {
    return formControl => formControl.value === '' || formControl.value === null ? { 'requiredError': `${name} is required` } : null;
  }

  static minLength(len: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value.toString().length < len ? { 'minLengthError': `The number of characters must be greater than ${len}` } : null;
      }
    };
  }

  static maxLength(len: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value.toString().length > len ? { 'maxLengthError': `The number of characters must be less than ${len}` } : null;
      }
    };
  }

  static minAndMaxLength(min: number, max: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value.toString().length > max || formControl.value.toString().length < min ?
        { 'minAndMaxLengthError': `The number of characters must be greater than ${min} and less than ${max}` } : null;
      }
    };
  }

  static minNumber(min: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value < min ? { 'minNumberError': `The number must be greater than ${min}` } : null;
      }
    };
  }

  static maxNumber(max: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value > max ? { 'maxNumberError': `The number must be less than ${max}` } : null;
      }
    };
  }

  static minAndMaxNumbers(min: number, max: number): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return formControl.value > max || formControl.value < min ?
        { 'minAndMaxNumbersError': `The numerical range must be greater than ${min} and less than ${max}` } : null;
      }
    };
  }

  static isNumericFloat(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_NUMERIC_FLOAT_REGEX.test(formControl.value) ? { 'isNumericFloatError': `Only numbers are allowed` } : null;
      }
    };
  }

  static isAlpha(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_ALPHA_REGEX.test(formControl.value) ? { 'isAlphaError': `Only letters are allowed` } : null;
      }
    };
  }

  static isAlphaSpace(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_ALPHA_SPACE_REGEX.test(formControl.value) ?
        { 'isAlphaSpaceError': `Only letters and spaces are allowed` } : null;
      }
    };
  }

  static isAlphaNumeric(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_ALPHA_NUMERIC_REGEX.test(formControl.value) ?
        { 'isAlphaNumericError': `Only numbers and letters are allowed` } : null;
      }
    };
  }

  static isAlphaNumericSpace(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_ALPHA_NUMERIC_SPACE_REGEX.test(formControl.value) ?
        { 'isAlphaNumericSpaceError': `Only letters, numbers and spaces are allowed` } : null;
      }
    };
  }

  static isUsername(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_USERNAME_REGEX.test(formControl.value) ?
        { 'isUsernameError': `Enter a valid username` } : null;
      }
    };
  }

  static isPassword(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_PASSWORD_REGEX.test(formControl.value) ?
        { 'isPasswordError': `Enter a valid password` } : null;
      }
    };
  }

  static matchPassword(password: FormControl): ValidatorFn {
    return formControl => formControl.value !== password.value ? { 'matchPasswordError': 'Passwords are not matched' } : null;
  }

  static phoneIsrael(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.PHONE_ISRAEL_REGEX.test(formControl.value) ? { 'phoneIsraelError': `Enter a valid phone number` } : null;
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
        return !Validator.IS_EMAIL_REGEX.test(formControl.value) ? { 'isEmailError': `Enter a valid email` } : null;
      }
    };
  }

  static isUrl(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_URL_REGEX.test(formControl.value) ? { 'isUrlError': `Enter a valid url` } : null;
      }
    };
  }

  static isSlug(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IS_SLUG_REGEX.test(formControl.value) ? { 'isSlugError': `Enter a valid slug` } : null;
      }
    };
  }

  static pattern(reg: RegExp, errorMessage: string): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !reg.test(formControl.value) ? { 'patternError': errorMessage } : null;
      }
    };
  }
}
