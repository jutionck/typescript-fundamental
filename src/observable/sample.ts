import { map, Observable, of } from 'rxjs';

// fungsi biasa
const foo = (): number => {
  console.log("Print from foo");
  return 10
}

const x = foo()
console.log(x);


// Observable
/*
* - Menyerupai promise
* - Setiap observable, hanya bisa di eksekusi/dijalankan ketika ada yang subscribe
* - Yang menjadi subscribe adalah si observer
* - Observer ini ada tiga yang bisa digunakan:
*   - observer.next (berhasil)
*   - observer.error (ketika ada error/gagal)
*   - observer.complete (artinya ketika tidak ada lagi observeble)
* Contoh: Try Catch Finaly
* */
const fooWithObservable = new Observable(observer => {
  try {
    console.log("Print from fooWithObservable");
    observer.next(10)
    observer.next(11)
    observer.next(12)
    setTimeout(() => {
      observer.next(13) // gak akan di jalankan
    }, 1000)
  } catch (err) {
    observer.error(err)
  }

})

// const y = fooWithObservable // tidak bisa
console.log("before");
fooWithObservable.subscribe(x => console.log(x))
console.log("after");

