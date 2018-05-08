import { Component, Input , AfterContentChecked } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements AfterContentChecked {
  @Input() public control: FormControl;

  public error: string;

  ngAfterContentChecked() {
    this.error = null;
    for (const key in this.control.errors) {
      if (this.control.dirty && this.control.invalid) {
        this.error = this.control.errors[key];
        break;
      }
    }
  }
}
