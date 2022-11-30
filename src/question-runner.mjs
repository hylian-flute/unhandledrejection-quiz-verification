// @ts-check

import { setTimeout } from "timers/promises";

/** @param { Function } callback */
export default function(callback) {
  return new Promise(resolve => {
    // unhandledrejection が発生したときは true を返す
    const listener = () => {
      process.off("unhandledRejection", listener);
      resolve(true);
    };

    process.on("unhandledRejection", listener);

    // 100ms 待っても unhandledrejection が発生しなかったら false を返す
    callback();
    setTimeout(100).then(() => {
      process.off("unhandledRejection", listener);
      resolve(false);
    });
  });
}
