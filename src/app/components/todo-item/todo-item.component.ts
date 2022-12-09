import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel} from "../../models/todo-model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
@Input() todo: TodoModel = {title: ""};
@Output() removeTodo = new EventEmitter<void>();

onDeleteTodo(){
  this.removeTodo.emit()
}
}
