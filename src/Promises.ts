export type CancellablePromise<T> = {
  promise: Promise<T>;
  cancel(): void;
};

export const makeCancelable = <T>(promise: Promise<T>) => {
  let hasCanceled = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      (val) => (hasCanceled ? reject({ isCanceled: true }) : resolve(val)),
      (error) => (hasCanceled ? reject({ isCanceled: true }) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
};

/**
 * Resolvable is a class which offers a jQuery "deferred" style object, with a promise that can be resolved later
 */
export class Resolvable<T> {
  public readonly promise: Promise<T>;
  public resolve: (thing: T) => void;

  constructor() {
    this.promise = new Promise<T>((resolve) => {
      this.resolve = (thing: T) => resolve(thing);
    });
  }
}
