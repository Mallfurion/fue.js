import { Fue } from "./lib/fue.js";
import { User } from "./user.js";

const app = new Fue({
  selector: "#app",
  data: {
    heading: "Welcome",
    users: [new User("Florin", "magician"), new User("Alin", "teacher"), new User("Sebastian", "pirate")],
  },
  template: (props) => {
    return `
        <h1>${props.heading}</h1>
        <div class="user-wrapper">
          ${props?.users
            ?.map(
              (user) => `
          <div class="user card">
            <img src="${user.avatar}"/>
            <span>${user.name}</span>
          </div>
          `
            )
            ?.join("")}
        </div>
      `;
  },
});

setTimeout(() => {
  app.data.users.push(new User("Adela", "nurse"));
}, 2000);

setTimeout(() => {
  app.data.users.push(new User("Maria", "curse"));
}, 3000);

setTimeout(() => {
  app.data.users.push(new User("Elwyn", "boat"));
  app.data.users.push(new User("Elwyn", "boat"));
  app.data.users.push(new User("Elwyn", "boat"));
}, 4000);
