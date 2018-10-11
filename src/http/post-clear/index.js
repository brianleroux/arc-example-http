let {session} = require('@architect/functions').http

exports.handler = async function http(request) {
  // read the session state
  let state = await session.read(request)
  // mutate the session state
  delete state.count
  // write out the new session state to the db
  let cookie = await session.write(state)
  // update the session cookie
  return {
    cookie, 
    status: 302,
    location: `/${process.env.NODE_ENV}`
  }
}
