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
      task: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log((this.todoValue = this.getTodo()));
  }

  addTask() {
    let val = this.form.get('task') as FormControl;
    console.log(val.value);
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
