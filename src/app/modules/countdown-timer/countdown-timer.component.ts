import { Component, OnInit, Input, Output, OnDestroy, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html'
})
export class CountDownTimerComponent implements OnInit, OnDestroy {
  @Input() public endTime: any;
  @Output() public zeroTrigger: EventEmitter<Boolean>;

  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
  public started: boolean;
  public timer: any;

  constructor() {
    this.zeroTrigger = new EventEmitter<Boolean>();
  }

  ngOnInit() {
    this.calculateCountDown();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  calculateCountDown(): void {
    let vm = this;
    this.timer = setInterval(function () {
      let now = new Date().getTime();
      let distance = vm.endTime - now;

      if (distance < 0) {
        vm.stopTimer();
      } else {
        vm.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        vm.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        vm.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        vm.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }

      if (!vm.started) {
        vm.started = true;
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timer);
    this.days = this.hours = this.minutes = this.seconds = 0;
    this.timer = undefined;
    this.zeroTrigger.emit(true);
  }
}
