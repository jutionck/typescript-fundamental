import { Todo } from './todo.model';
import { EMPTY, Observable, Observer, of, Subject } from 'rxjs';

export class TodoService {
  dataTodo: Todo[] = [];
  todoNotifier: Subject<boolean> = new Subject<boolean>();

  addPromise(todo: Todo): Promise<Todo> {
    return new Promise<Todo>((resolve, reject) => {
      console.log('Todo Promise: ', todo);
      setTimeout(() => {
        todo.id = this.dataTodo.length + 1;
        this.dataTodo.push(todo);
        resolve(todo)
      }, 1000)
    })
  }

  add(todo: Todo): Observable<Todo> {
    return new Observable<Todo>((observer: Observer<Todo>) => {
      // console.log('Todo Observable: ', todo);
      setTimeout(() => {
        todo.id = this.dataTodo.length + 1;
        this.dataTodo.push(todo);
        this.todoNotifier.next(true)
        observer.next(todo)
      }, 1000)
    })
  }

  list(): Observable<Todo[]> {
    return of(this.dataTodo)
  }

  update(todo: Todo): Observable<Todo> {
    return new Observable<Todo>((observer: Observer<Todo>) => {
      setTimeout(() => {
        this.dataTodo = this.dataTodo.map((item) => {
          if (item.id === todo.id) {
            item = { ...item, ...todo};
          }
          return item
        });
        this.todoNotifier.next(true)
        observer.next(todo)
      }, 1000)
    })
  }

  delete(todo: Todo): Observable<Todo> {
    return EMPTY
  }

  get(id: number): Observable<Todo> {
    return EMPTY;
  }

  notify(): Observable<boolean>{
    return this.todoNotifier.asObservable()
  }

  // list(): Observable<Todo[]> {
  //   return new Observable<Todo[]>((observer: Observer<Todo[]>) => {
  //     setTimeout(() => {
  //       observer.next(this.dataTodo)
  //     }, 1000)
  //   })
  // }
}
