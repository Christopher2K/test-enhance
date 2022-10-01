export default function TodoList({ html, state }) {
  const todos = state.store.todos

  function renderItem(todo) {
    return html`
      <li class="pt-3 pb-3">
        <todo-item name="${todo.name}"></todo-item>
      </li>
    `
  }

  return html`
    <style>
      ul {
        list-style: none;
      }
    </style>

    <ul class="mb3">
      ${todos.map(renderItem).join("")}
    </ul>
  `
}
