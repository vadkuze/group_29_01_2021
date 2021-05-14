import { EventEmitter, OnDestroy, Output } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { ICounterEvent } from '../shared/models/counter-event.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterService]
})
export class CounterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public counterName: string = 'default';
  @Input('initialValue') public readonly counterValue: number = 0;

  @Output() public onChangeValue: EventEmitter<ICounterEvent> = new EventEmitter();
  
  private readonly _DETECT_VALUE = 10;

  constructor(public counterService: CounterService) { }

  public ngOnInit(): void {
   console.log('ngOnInit',this.counterService);
   this.counterService.counterValue = this.counterValue;
  }

  public ngOnChanges(): void {
    console.log('ngOnChanges',this.counterValue);
   this.counterService.counterValue = this.counterValue;
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }

  public increment(): void {
    this.counterService.counterValue++;
    this.listeningValueOnTen();
  }

  public listeningValueOnTen() {
    if(this.counterService.counterValue >= this._DETECT_VALUE) {
      this.onChangeValue.emit({
        value: this.counterService.counterValue,
        name: this.counterName
      })
    }
  }
}
