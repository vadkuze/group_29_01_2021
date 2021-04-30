import { AfterViewInit, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { ICounterEvent } from './shared/models/counter-event.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('button') public toggleButton: ElementRef;
  @ViewChildren(CounterComponent) public counters: QueryList<CounterComponent>;

  public title = 'components';
  public show: boolean = true;

  public toggleCounters(): void {
    this.show = !this.show;
  }

  public onChangeValue(event: ICounterEvent): void {
    console.log(event.value, 'from COUNTER ' + event.name);
  }

  public ngOnInit(): void {
 
  }

  public ngAfterViewInit() {
    console.dir(this.toggleButton.nativeElement);
    console.log(this.counters.toArray());
  }

  public incrementAll(): void {
    this.counters.forEach((counter: CounterComponent) => counter.increment());
  }

}
