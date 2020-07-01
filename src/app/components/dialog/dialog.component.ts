import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  todoValue: Todo[];
  form: FormGroup;
  task: Todo;

  constructor(private formBuilder: FormBuilder, private httpService: HttpClientService) {
    this.form = formBuilder.group({
      task: [''],
      valuePriority: [''],
      completed: [],
    });
  }

  ngOnInit(): void {

  }

  addTask() {
    let val = this.form.get('task') as FormControl;
    let valTtwo = this.form.get('valuePriority') as FormControl;
    let valThree = this.form.get('completed') as FormControl;
    console.log(val.value, valTtwo.value, valThree.value);
    this.form.reset();
  }

  // completed(todo: Todo) {
  // }

}
