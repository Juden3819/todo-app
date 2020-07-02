import { Task } from './../../classes/taks';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  tasks: Task[] = [];
  newTask: Task = new Task();
  task: string;
  light: string;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.getTask();

  }

  isTaskCompleted(task: Task) {
    task.taskCompleted = !task.taskCompleted;
  }

  getTask() {
    this.httpClientService.getData().subscribe(task => this.tasks = task);
  }

  addTask() {

    this.httpClientService.postTask(this.newTask).subscribe(() => {
      this.httpClientService.getData().subscribe(task => this.tasks = task);
    }
    );
    this.newTask.taskCategory = '';
    this.newTask.taskDescription = '';
    this.newTask.taskTitle = '';
  }

  deleteTask(id: any) {
    this.httpClientService.deleteTask(id).subscribe(() => {
      this.getTask();
    });
  }

  editPost(id: any, task: Task) {
    this.httpClientService.editTask(id, task).subscribe(() => {
      this.getTask();
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
