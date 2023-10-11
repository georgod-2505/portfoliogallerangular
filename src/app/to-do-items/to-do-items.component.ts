import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './to-do-items-data/to-do-item';
import { ITEMS } from './to-do-items-data/mock-todo-Items';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit{
  
  items = ITEMS;
  selectedItem: ToDoItem = { id: 0, name: '', isComplete: false };
  autos: string = 'Audi';

  constructor() {}

  ngOnInit() {}

  onSelect(item: ToDoItem): void {
    this.selectedItem = item;
  }
}
