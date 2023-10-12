const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api')
const middleware = require('./middleware')

const PORT = process.env.PORT || 1337

const app = express()

app.use(bodyParser.json())

app.get('/health', api.getHealth)
app.put('/:student-id/:propertyName(/:propertyName)', api.putStudentData)
app.get('/:student-id/:propertyName(/:propertyName)', api.getStudentData)
app.delete('/:student-id/:propertyName(/:propertyName)', api.removeStudentData)

app.use(middleware.handleError)
app.use(middleware.notFound)
const server = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
)

if (require.main !== module) {
  module.exports = server
}
