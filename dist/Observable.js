"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebouncedObservable = void 0;
class DebouncedObservable {
    constructor(debounceTimeMs) {
        this.callbacks = [];
        this.emptyObject = {};
        this.debounceTimeMs = debounceTimeMs;
    }
    addListener(cb) {
        this.callbacks.push(cb);
    }
    removeListener(cb) {
        const i = this.callbacks.indexOf(cb);
        if (i === -1) {
            throw new Error('callback being removed is not in list of callbacks');
        }
        this.callbacks.splice(i, 1);
    }
    triggerEvent(thing) {
        const emptyObject = {};
        this.emptyObject = emptyObject;
        const timeoutCallback = () => {
            if (this.emptyObject !== emptyObject) {
                // there has been another event since our event was added.
                return;
            }
            this.callbacks.forEach(listener => {
                listener(thing);
            });
        };
        setTimeout(timeoutCallback, this.debounceTimeMs);
    }
}
exports.DebouncedObservable = DebouncedObservable;
