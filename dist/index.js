"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_coffe_1 = require("./asynchronous/order-coffe");
const myOrder = (order) => {
    return new Promise((resolve, reject) => {
        (0, order_coffe_1.orderCoffe)(order, reject, resolve);
    });
};
async function listOrderCoffe() {
    try {
        const kopiTarik = await myOrder('Kopi Tarik');
        const kopiABC = await myOrder('Kopi ABC');
        const kopiSusuKambing = await myOrder('Kopi Susu Kambing');
        console.log(kopiTarik);
        console.log(kopiABC);
        console.log(kopiSusuKambing);
        const teh = await myOrder('Teh');
        console.log(teh);
    }
    catch (error) {
        console.log(error);
    }
}
listOrderCoffe();
