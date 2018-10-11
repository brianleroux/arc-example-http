let arc = require('@architect/functions')

exports.handler = async function http(request) {
  let state = await arc.http.session.read(request)
  return {
    code: 201,
    type: 'text/html; charset=utf-8',
    body: `<!doctype html>
<html>
<body>
  <h1>lucky</h1>
  <h3><pre>${state.count || 0}</pre></h3>
  <form action=/staging/count method=post>
    <button>1up</button>
  </form>
  <form action=/staging/clear method=post>
    <button>Clear</button>
  </form>
</body>
</html>`
  }
}
