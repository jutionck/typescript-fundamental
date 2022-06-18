"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCoffe = void 0;
const orderCoffe = (coffeName, cbError, cbSuccess) => {
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(() => {
        if (coffeName == 'Teh') {
            cbError(`Kami tidak menjual ${coffeName}`);
        }
        else {
            coffee = `Pesanan untuk ${coffeName} kamu sudah jadi`;
            cbSuccess(coffee);
        }
    }, 5000);
};
exports.orderCoffe = orderCoffe;
