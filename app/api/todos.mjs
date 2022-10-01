export function post(req) {

  req.session.todos = [
    ...(Array.isArray(req.session.todos) ? req.session.todos : []),
    { name: req.body.todo, done: false },
  ]

  return {
    session: { todos: req.session.todos },
    location: '/'
  }
}
