// https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts
export function reactive(target, appInstance = null) {
  if (target === null || typeof target !== "object") {
    return target;
  }

  for (const property in target) {
    target[property] = reactive(target[property], appInstance);
  }

  const handler = {
    get: (target, property, receiver) => {
      return Reflect.get(target, property, receiver);
    },

    set: (target, property, value, receiver) => {
      appInstance?.render();
      return Reflect.set(target, property, value, receiver);
    },

    deleteProperty: (target, property) => {
      appInstance?.render();
      return Reflect.deleteProperty(target, property);
    },
  };

  return new Proxy(target, handler);
}
