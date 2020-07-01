import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  todoValue: Todo[];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      task: [''],
      valuePriority: [''],
      completed: [],
    });
  }

  ngOnInit(): void {
    this.todoValue = this.getTodo();
  }

  addTask() {
    let val = this.form.get('task') as FormControl;
    let valTtwo = this.form.get('valuePriority') as FormControl;
    let valThree = this.form.get('completed') as FormControl;
    console.log(val.value, valTtwo.value, valThree.value);
    this.form.reset();
  }

  getTodo(): Todo[] {
    return [
      {
        todoValue: '',
        todoValuePriority: ['level-1', 'level-2', 'level-3'],
        todoValueComplete: false,
      },
    ];
  }

  completed(todo: Todo) {
    todo.todoValueComplete = !todo.todoValueComplete;
  }
}
