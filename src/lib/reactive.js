// https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts
export function reactive(target) {
  if (target === null || typeof target !== "object") {
    return target;
  }

  for (const property in target) {
    target[property] = reactive(target[property]);
  }

  const handler = {
    get: (target, property, receiver) => {
      return Reflect.get(target, property, receiver);
    },

    set: (target, property, value, receiver) => {
      return Reflect.set(target, property, value, receiver);
    },

    deleteProperty: (target, property) => {
      return Reflect.deleteProperty(target, property);
    },
  };

  return new Proxy(target, handler);
}
