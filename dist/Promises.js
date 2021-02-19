"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCancelable = void 0;
const makeCancelable = (promise) => {
    let hasCanceled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(val => hasCanceled ? reject({ isCanceled: true }) : resolve(val), error => hasCanceled ? reject({ isCanceled: true }) : reject(error));
    });
    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled = true;
        },
    };
};
exports.makeCancelable = makeCancelable;
