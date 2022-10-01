export default function TodoForm({ html, state }) {
  console.log(state.store.todos)

  return html`
    <form class="mb2" method="post" action="todos">
      <fieldset class="flex flex-col justify-start content-start mb1">
        <label class="mb-2 text weight1 font-mono font-medium" for="todo">What would you like to do (now or later) ?</label>
        <input class="font-mono border-solid border1 border-current p-2" name="todo" type="text" />
      </fieldset>
      <button class="font-mono font-semibold underline" type="submit">Add todo</button>

      <!-- <script src="_static/todo-form.mjs" type="module"></script> -->
    </form>

    <form method="post" action="todos/clear">
      <button class="font-mono font-semibold underline" type="submit">Clear list</button>
    </form>
  `
}
