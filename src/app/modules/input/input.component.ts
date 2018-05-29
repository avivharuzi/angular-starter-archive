import { Component, Input, forwardRef, AfterViewInit, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputComponent implements ControlValueAccessor, AfterViewInit, OnInit {
  @Input() public type: string;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public control: FormControl;

  @ViewChild('input') inputRef: ElementRef;

  private _value: any;

  constructor() {
    this.type = 'text';
    this.placeholder = '';
  }

  ngOnInit() {
    if (this.label && !this.placeholder) {
      this.placeholder = this.label;
    }
  }

  ngAfterViewInit() {
    this.value = this.control.value;
  }

  onChange(e: Event, newValue: any): void {
    this.value = newValue;
    this.propagateChange(this.value);
  }

  getClass(): string {
    if (!(this.control.errors) && !(this.control.pristine)) {
      return 'is-valid';
    } else if ((this.control.errors) && !(this.control.pristine)) {
      return 'is-invalid';
    }
  }

  get value(): any {
    return this._value;
  }

  set value(newValue: any) {
    this._value = newValue;
  }

  writeValue(newValue: any) {
    this.value = newValue;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  propagateChange = (_: any) => {
  }

  registerOnTouched(fn: any) {
  }
}
