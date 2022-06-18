"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCoffe = void 0;
const orderCoffe = (callback) => {
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(() => {
        coffee = "Kopi kamu sudah jadi.";
        callback(coffee);
    }, 3000);
};
exports.orderCoffe = orderCoffe;
