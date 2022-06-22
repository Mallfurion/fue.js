import { reactive } from "./reactive.js";

export class Fue {
  constructor({ selector, data, template }) {
    this.selector = selector;
    this.element = document.querySelector(this.selector);
    this.data = reactive(data);
    this.template = template;

    this.render();
  }

  async render() {
    this.element.innerHTML = this.template(this.data);
  }
}
