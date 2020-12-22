const express = require('express')
const app = express()
const port = 2882
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})