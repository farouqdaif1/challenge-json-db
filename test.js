const tape = require('tape')
const jsonist = require('jsonist')

const port = (process.env.PORT = process.env.PORT || require('get-port-sync')())
const endpoint = `http://localhost:${port}`

const server = require('./server')

tape('health', async function (t) {
  const url = `${endpoint}/health`
  jsonist.get(url, (err, body) => {
    if (err) t.error(err)
    t.ok(body.success, 'should have successful healthcheck')
    t.end()
  })
})
tape('Should create student ', async function (t) {
  const data = { score: '32' }
  const url = `${endpoint}/hk123/quiz`
  jsonist.put(url, data, (err, body) => {
    if (err) t.error(err)
    t.equal(JSON.stringify(body.data), '{"quiz":{"score":"32"}}')
    t.end()
  })
})
tape('Should get student score ', async function (t) {
  const url = `${endpoint}/hk123/quiz/score`
  jsonist.get(url, (err, body) => {
    if (err) t.error(err)
    t.equal(body, '32')
    t.end()
  })
})
tape('Should delete student score ', async function (t) {
  const url = `${endpoint}/hk123/quiz`
  jsonist.delete(url, (err, body) => {
    if (err) t.error(err)
    console.log(body)
    t.equal(JSON.stringify(body.data), '{"score":"32"}')
    t.end()
  })
})
tape('cleanup', function (t) {
  server.close()
  t.end()
})
