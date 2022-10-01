export async function get(req) {
  let todos = req.session.todos ?? []

  return {
    json: { todos },
  }
}
