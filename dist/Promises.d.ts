export declare type CancellablePromise<T> = {
    promise: Promise<T>;
    cancel(): void;
};
export declare const makeCancelable: <T>(promise: Promise<T>) => {
    promise: Promise<T>;
    cancel(): void;
};
/**
 * Resolvable is a class which offers a jQuery "deferred" style object, with a promise that can be resolved later
 */
export declare class Resolvable<T> {
    readonly promise: Promise<T>;
    resolve: (thing: T) => void;
    constructor();
}
