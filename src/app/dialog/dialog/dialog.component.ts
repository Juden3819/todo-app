import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  todoValue: Todo[];

  constructor() {}

  ngOnInit(): void {
    console.log((this.todoValue = this.getTodo()));
  }

  getTodo(): Todo[] {
    return [
      {
        todoValue: '',
        todoValueColor: ['red', 'yellow', 'green'],
        todoValueComplete: false,
      },
    ];
  }
}
