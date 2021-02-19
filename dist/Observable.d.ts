export declare type Callback<T> = (arg: T) => void;
export interface Observable<T> {
    addListener(cb: Callback<T>): void;
    removeListener(cb: Callback<T>): void;
    triggerEvent(thing: T): void;
}
export declare class DebouncedObservable<T> {
    private callbacks;
    private debounceTimeMs;
    private emptyObject;
    constructor(debounceTimeMs: number);
    addListener(cb: Callback<T>): void;
    removeListener(cb: Callback<T>): void;
    triggerEvent(thing: T): void;
}
