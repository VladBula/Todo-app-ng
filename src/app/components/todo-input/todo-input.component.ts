import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
todoTitle: string = "";
@Output() todoTitleSubmit = new EventEmitter<string>();

submitTodo(){
  this.todoTitleSubmit.emit(this.todoTitle)
  this.todoTitle = ""
}
}
