import { ValidatorFn, FormControl } from '@angular/forms';

export class Validator {
  private static readonly ALPHA_REGEX: RegExp = /^[A-Za-z]*$/;
  private static readonly ALPHA_DASH_REGEX: RegExp = /^[A-Za-z_-]*$/;
  private static readonly ALPHA_SPACES_REGEX: RegExp = /^[A-Za-z ]*$/;
  private static readonly ALPHA_NUMERIC_REGEX: RegExp = /^[A-Za-z0-9]*$/;
  private static readonly ALPHA_NUMERIC_DASH_REGEX: RegExp = /^[A-Za-z0-9_]*$/;
  private static readonly ALPHA_NUMERIC_SPACES_REGEX: RegExp = /^[A-Za-z0-9 ]*$/;
  private static readonly NUMERIC_REGEX: RegExp = /^[+-]?\d+(\.\d+)?$/;
  private static readonly NUMERIC_FLOAT_REGEX: RegExp = /^\d+(\.\d+)?$/;
  private static readonly NUMERIC_DIGITS_REGEX: RegExp = /^\d+$/;
  private static readonly WITHOUT_NUMBERS_REGEX: RegExp = /^[^\d]*$/;
  private static readonly USERNAME_REGEX: RegExp = /^[A-Za-z0-9_]*$/;
  private static readonly PASSWORD_REGEX: RegExp = /^[A-Za-z0-9!@#$%^&*()_]*$/;
  private static readonly EMAIL_REGEX: RegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  private static readonly URL_REGEX: RegExp = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/;
  private static readonly IP_REGEX: RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  private static readonly SLUG_REGEX: RegExp = /^[a-z][a-z\-]*[a-z]$/;
  private static readonly TIME_REGEX: RegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  private static readonly DATE_REGEX: RegExp = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  private static readonly PHONE_ISRAEL_REGEX: RegExp = /^((\+972|972)|0)( |-)?([1-468-9]( |-)?\d{7}|(5|7)[0-9]( |-)?\d{7})$/;

  static required(name: string): ValidatorFn {
    return formControl => formControl.value === '' || formControl.value === null ? { 'requiredError': `${name} is required` } : null;
  }

  static regex(reg: RegExp, errorMessage: string): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !reg.test(formControl.value) ? { 'regexError': errorMessage } : null;
      }
    };
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

  static alpha(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.ALPHA_REGEX.test(formControl.value) ? { 'alphaError': `Only letters are allowed` } : null;
      }
    };
  }

  static alphaDash(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.ALPHA_DASH_REGEX.test(formControl.value) ?
        { 'alphaDashError': `Only letters and dashes are allowed` } : null;
      }
    };
  }

  static alphaSpaces(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.ALPHA_SPACES_REGEX.test(formControl.value) ?
        { 'alphaSpacesError': `Only letters and spaces are allowed` } : null;
      }
    };
  }

  static alphaNumeric(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.ALPHA_NUMERIC_REGEX.test(formControl.value) ?
        { 'alphaNumericError': `Only letters and numbers are allowed` } : null;
      }
    };
  }

  static alphaNumericDash(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.ALPHA_NUMERIC_DASH_REGEX.test(formControl.value) ?
        { 'alphaNumericError': `Only letters, numbers and dashes are allowed` } : null;
      }
    };
  }

  static alphaNumericSpaces(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.ALPHA_NUMERIC_SPACES_REGEX.test(formControl.value) ?
        { 'alphaNumericSpacesError': `Only letters, numbers and spaces are allowed` } : null;
      }
    };
  }

  static numeric(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.NUMERIC_REGEX.test(formControl.value) ? { 'numericError': `Only numbers are allowed` } : null;
      }
    };
  }

  static numericFloat(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.NUMERIC_FLOAT_REGEX.test(formControl.value) ? { 'numericFloatError': `Only numbers with floating are allowed` } : null;
      }
    };
  }

  static numericDigits(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.NUMERIC_DIGITS_REGEX.test(formControl.value) ? { 'numericDigitsError': `Only digit numbers are allowed` } : null;
      }
    };
  }

  static withoutNumbers(): ValidatorFn {
    return formControl => !Validator.WITHOUT_NUMBERS_REGEX.test(formControl.value) ?
    { 'withoutNumbersError': `You cant type numbers` } : null;
  }

  static username(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.USERNAME_REGEX.test(formControl.value) ?
        { 'usernameError': `Enter a valid username` } : null;
      }
    };
  }

  static password(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.PASSWORD_REGEX.test(formControl.value) ?
        { 'passwordError': `Enter a valid password` } : null;
      }
    };
  }

  static email(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.EMAIL_REGEX.test(formControl.value) ? { 'emailError': `Enter a valid email` } : null;
      }
    };
  }

  static url(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.URL_REGEX.test(formControl.value) ? { 'urlError': `Enter a valid url` } : null;
      }
    };
  }

  static ip(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.IP_REGEX.test(formControl.value) ? { 'ipError': `Enter a valid ip` } : null;
      }
    };
  }

  static slug(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.SLUG_REGEX.test(formControl.value) ? { 'slugError': `Enter a valid slug` } : null;
      }
    };
  }

  static time(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.TIME_REGEX.test(formControl.value) ? { 'timeError': `Enter a valid time` } : null;
      }
    };
  }

  static date(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.DATE_REGEX.test(formControl.value) ? { 'dateError': `Enter a valid date` } : null;
      }
    };
  }

  static phoneIsrael(): ValidatorFn {
    return (formControl) => {
      if (formControl.value !== null) {
        return !Validator.PHONE_ISRAEL_REGEX.test(formControl.value) ? { 'phoneIsraelError': `Enter a valid israel phone number` } : null;
      }
    };
  }
}
