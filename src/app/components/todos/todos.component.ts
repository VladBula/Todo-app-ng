import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

interface BaseTodoResponse<T> {
  data: T;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': 'bfa7db01-d291-4b43-9a1d-5cdebab39351'
    }
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions).subscribe((res) => {
      this.todos = res
    })
  }

  createTodo() {
    const randNum = Math.floor(Math.random() * 100)
    const title = 'Angular' + randNum
this.http.post<BaseTodoResponse<{item: Todo}>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, this.httpOptions)
  .subscribe((res) => {
    const newTodo = res.data.item
    this.todos.unshift(newTodo)
  })
  }

  deleteTodo() {
   const todoId = 'ddd6d398-359f-4ea2-aba4-7696772e7f6b'
this.http.delete<BaseTodoResponse<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, this.httpOptions)
  .subscribe(() => {
this.todos = this.todos.filter(tl => tl.id !== todoId)
  })
  }
}


