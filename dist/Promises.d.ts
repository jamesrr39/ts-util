export declare type CancellablePromise<T> = {
    promise: Promise<T>;
    cancel(): void;
};
export declare const makeCancelable: <T>(promise: Promise<T>) => {
    promise: Promise<T>;
    cancel(): void;
};
