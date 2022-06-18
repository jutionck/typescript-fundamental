export const orderCoffe = (coffeName: string, cbError, cbSuccess) => {
  let coffee = null
  console.log("Sedang membuat kopi, silahkan tunggu...");
  setTimeout(() => {
    if(coffeName == 'Teh') {
      cbError(`Kami tidak menjual ${coffeName}`)
    } else {
      coffee = `Pesanan untuk ${coffeName} kamu sudah jadi`;
      cbSuccess(coffee)
    }
  }, 5000)
  // return coffee
}


