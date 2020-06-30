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
      valuePriority: [''],
    });
  }

  ngOnInit(): void {
    this.todoValue = this.getTodo();
  }

  addTask() {
    let val = this.form.get('task') as FormControl;
    let valTtwo = this.form.get('valuePriority') as FormControl;
    console.log(val.value, valTtwo.value);
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
}
