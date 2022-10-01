export default function PageTitle({ html, state: { attrs } }) {
  const title = attrs.title

  return html`
    <h1 class="font-mono font-bold text2 mb3">${title}</h1>
  `
}

