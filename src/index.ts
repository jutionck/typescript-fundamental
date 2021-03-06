/*
* Instalasi TypeScript & Penggunaan
* - Global          -> npm install --location=global ts-node || npm install --location=global typescript
* - Local Project   -> npm install ts-node || npm install typescript
* - Cek TypeScript  -> tsc --version || tsc -v
*
*
* - TypeScript harus kita compile ke JavaScript dahulu: npx tsc index.ts || tsc index.ts
* - Dengan begitu dia akan membuatkan 1 file yang sama tetapi dengan ext .js
*
* TypeScript ada sebuah tipe data ENUM, interface
*
* */

import CarType from './data/car-type';
import { Car } from './data/car';
import { Vehicle } from './data/vehicle';
import { orderCoffe } from './asynchronous/order-coffe';
import { Todo } from './observable/demo/todo.model';
import { TodoService } from './observable/demo/todo.service';
import { combineLatest, map } from 'rxjs';

// const vehicle: Vehicle = {
//   id: '123',
//   name: 'Avanza Veloz',
//   brand: 'Toyota',
//   type: CarType.SEDAN,
//   engine: 0,
// }
// const car: Car = new Car(vehicle)
// // car.brand = ""
// // car.color // error
// // car.setName("Avanza")
// console.log(car.getName());

// orderCoffe(coffe => console.log(coffe))

// const orderError = (coffe: string) => console.log(coffe);
// const orderSucces = (coffe: string) => console.log(coffe);
//
// // callback hell
// orderCoffe('Kapal Api', orderError, (coffe) => {
//   console.log(coffe);
//   orderCoffe('Kopi Tubruk', orderError, (coffe) => {
//     console.log(coffe);
//     orderCoffe('Teh', orderError, (coffe) => {
//       console.log(coffe);
//       orderCoffe('Kopi Tarik Kemang', orderError, (coffe) => {
//         console.log(coffe);
//       })
//     })
//   })
// })

// promise: resolve, reject
// ciri khas promise itu selalu ada keyword then (success) & catch (error)
// const myOrder = new Promise((resolve, reject) => {
//   orderCoffe('Kopi ABC', reject, resolve);
//   orderCoffe('Kopi Tarik', reject, resolve);
// });
//
// myOrder.then((coffe) => {
//   console.log(coffe);
// }).catch((error) => {
//   console.log(error);
// });

// Promise All
// const myOrder = (order: string): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     orderCoffe(order, reject, resolve)
//   })
// }
//
// Promise.all([
//     myOrder('Kopi Tarik'),
//     myOrder('Kopi ABC'),
//     myOrder('Kopi Susu Kambing'),
//     myOrder('Teh')
// ]).then((allOrder: string[]) => {
//   for (const order of allOrder) {
//     console.log(order);
//   }
// }).catch(error => console.log(error))

// Async - Await
// const myOrder = (order: string): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     orderCoffe(order, reject, resolve)
//   })
// }
//
// async function listOrderCoffe(): Promise<void> {
//   try {
//     const kopiTarik = await myOrder('Kopi Tarik');
//     const kopiABC = await myOrder('Kopi ABC');
//     const kopiSusuKambing = await myOrder('Kopi Susu Kambing');
//     console.log(kopiTarik);
//     console.log(kopiABC);
//     console.log(kopiSusuKambing);
//
//     const teh = await myOrder('Teh')
//     console.log(teh);
//
//   } catch (error) {
//     console.log(error);
//   }
// }
//
// listOrderCoffe()

// 19 Juni 2022
/*
* Reactive Programming ?
* */

const todo: Todo = {
  label: 'Makan',
  isDone: false
}

const todoService: TodoService = new TodoService();
// const todoPromise: Promise<Todo> = todoService.addPromise(todo);

// with observable
combineLatest([
  todoService.add({label: 'Makan', isDone: false}),
  todoService.add({label: 'Minum', isDone: true}),
  todoService.add({label: 'Tidur', isDone: false}),
  todoService.add({label: 'Ngoding', isDone: true}),
]).subscribe((todos: Todo[]) => {
  console.log(`${todos.length} todo item telah di tambahkan`);
});

todoService.add({label: 'Jalan-Jalan', isDone: false}).subscribe()
todoService.update({id: 1, label: 'Makan', isDone: true}).subscribe()
todoService.delete({id: 5, label: 'Jalan-Jalan', isDone: false}).subscribe()

todoService.notify().subscribe((isUpdated: boolean) => {
  if (isUpdated) {
    todoService.list()
        .pipe(
            map((list: Todo[]) => {
              return list.map((todo: Todo) => {
                return `Todo ${todo.label} ${( todo.isDone ? 'sudah selesai' : 'belum selesai')}`;
              });
            }),
        )
        .subscribe((list: any[]) => {
          console.log('Todo List', list);
        });
  }
});



