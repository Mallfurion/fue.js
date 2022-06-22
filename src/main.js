import { Fue } from "./lib/fue.js";

const app = new Fue({
  selector: "#app",
  data: {
    heading: "Welcome",
    todos: ["Eat", "Drink", "Code"],
  },
  template: (props) => {
    return `
        <h1>${props.heading}</h1>
        <ul>
          ${props?.todos?.map((todo) => `<li>${todo}</li>`)?.join("")}
        </ul>
      `;
  },
});

app.data.todos.push("ceva");
