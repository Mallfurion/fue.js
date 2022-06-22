import { reactive } from "./reactive.js";

export class Fue {
  debounce = null;

  constructor({ selector, data, template }) {
    this.selector = selector;
    this.element = document.querySelector(this.selector);
    this.data = reactive(data, this);
    this.template = template;

    this.render();
  }

  #render() {
    this.element.innerHTML = this.template(this.data);
  }

  render() {
    if (this.debounce) {
      window.cancelAnimationFrame(this.debounce);
    }

    this.debounce = window.requestAnimationFrame(() => {
      this.#render();
    });
  }
}
