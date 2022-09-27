type Callback = () => void;

/**
 * createDebouncer creates a debounced function. It waits for a period of time and then runs the given function, unless it has been called again in the meantime.
 * It's useful when listening to events. For example, window resize is called hundreds of times when resizing the window, and code doing a calculation every time may cripple the browser.
 * Instead, using a deboucer means this calculation is only done once in the wait time window.
 * @param timeMs wait time in milliseconds
 * @returns
 */
export function createDebouncer(timeMs: number) {
  let lastCallback: Callback | undefined;

  return function (f: Callback) {
    lastCallback = f;
    setTimeout(() => {
      if (lastCallback !== f) {
        // debouncer has been called after we called it, so do nothing here
        return;
      }

      f();
    }, timeMs);
  };
}
