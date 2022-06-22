export class User {
  constructor(name, look) {
    this.name = name;
    this.look = look;
  }

  get avatar() {
    return `https://avatars.dicebear.com/api/personas/${this.look}.svg`;
  }
}
