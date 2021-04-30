import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ContentChildren(ItemComponent) public items: QueryList<ItemComponent>;
  
  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterContentInit(): void {
    console.log(this.items);
  }


}
