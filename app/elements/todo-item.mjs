export default function TodoItem({ html, state }) {
  const name = state.attrs.name

  return html`
    <fieldset>
      <input class="mr-2" type="checkbox" name="todoState">
      <label class="font-mono text1">${name}</label>
    </fieldset>
  `
}
