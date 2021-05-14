import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private _counterValue: number = 0;

  get counterValue(): number {
    return this._counterValue;
  }

  set counterValue(value) {
    this._counterValue = value;
  }

  constructor() { }
}
