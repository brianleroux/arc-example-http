# arc-example-http

demo for new `@http` section

### explainer

the new http function signature looks like this:

```javascript
exports.handler = async function http(request) {
  return {
    status: 201, 
    type: 'text/html',
    body:'<b>hello world</b>'
  }
}
```

much more terse! also more powerful. the response api:

- `status` or `code` sets the http status code (defaults to `200`)
- `body` is the response body 
- `cors:true|false` enable cors
- `type` override the `Content-Type` header (currently defaults to `application/json`)
- `location` override the `Location` header (combine w `status:302` to redirect)
- `cookie` override the `Set-Cookie` header

`@architect/functions` and `@architect/data` are both still available so you can opt into reading/writing the session cookie and/or accessing dynamodb tables defined by `.arc`

(this app demos using session)
