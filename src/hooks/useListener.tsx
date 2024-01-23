import { EventEmitter } from "fbemitter";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
const emitter = new EventEmitter();

export function useListener<T>(eventType: string, listener: (eventData: T) => void, deps?: any[]) {
  deps = deps ?? [];
  useEffect(() => {
    const sub = emitter.addListener(eventType, listener);
    return () => {
      sub.remove();
    };
  }, deps);
}

export function useListenerState<T>(
  eventType: string,
  defaultState?: T,
  listener?: (eventData: T) => void,
  deps: any[] = []
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [state, setState] = useState<T | undefined>(defaultState);
  const handler = (eventData: T) => {
    setState(eventData);
    listener && listener(eventData);
  };

  useEffect(() => {
    const sub = emitter.addListener(eventType, handler);
    return () => {
      sub.remove();
    };
  }, deps);
  return [state, setState];
}

const delay = async (time: number): Promise<void> => {
  return new Promise((resolve) => {
    if (time === 0) {
      resolve();
      return;
    }
    const id = setTimeout(() => {
      resolve();
      clearTimeout(id);
    }, time);
  });
};

export async function emit<T>(eventType: string, data?: T) {
  emitter.emit(eventType, data);
  await delay(0);
}
