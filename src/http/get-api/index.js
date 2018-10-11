exports.handler = async function http() {
  return {
    cors: true,
    status: 201,
    body: JSON.stringify({hello:1, 'whee':2, hi:'two'}),
  }
}
