"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(timeSeconds) {
        this.hours = Math.floor(timeSeconds / 3600);
        let remainingSeconds = timeSeconds - (this.hours * 3600);
        this.minutes = Math.floor(remainingSeconds / 60);
        remainingSeconds = remainingSeconds - (this.minutes * 60);
        this.seconds = remainingSeconds;
    }
    toString() {
        let s = '';
        if (this.hours) {
            s += `${this.hours}h `;
        }
        if (this.minutes) {
            s += `${this.minutes}m `;
        }
        s += `${this.seconds}s`;
        return s;
    }
}
exports.Time = Time;
