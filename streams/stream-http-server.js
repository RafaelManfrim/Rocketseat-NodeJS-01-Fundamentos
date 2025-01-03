import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const inverse = Number(chunk.toString()) * -1

    console.log(inverse)

    callback(null, Buffer.from(String(inverse)))
  }
}

const server = http.createServer((req, res) => {
  return req
    .pipe(new InverseNumberStream())
    .pipe(res)
})

server.listen(3334)
