// @ts-check

import { setTimeout } from "timers/promises";

const sleep = () => setTimeout(50);

export default [
  function() {
    Promise.reject();
  },
  function() {
    Promise.reject()
      .catch(() => {});
  },
  function() {
    Promise.reject()
      .then(v => v)
      .then(v=> v, () => {});
  },
  function() {
    const f = async () => {
      const p = Promise.reject();
      await sleep();
      p.catch(() => {});
    };
    f();
  },
  function() {
    const f = async () => {
      await Promise.reject();
    };
    f().catch(() => {});
  },
  function() {
    const f = async () => {
      const p = Promise.reject().catch(e => { throw e });
      await sleep();
      await p;
    };
    f().catch(() => {});
  },
  function() {
    const f = async () => {
      const p = Promise.reject().catch(e => e);
      await sleep();
      throw await p;
    };
    f().catch(() => {});
  }
]