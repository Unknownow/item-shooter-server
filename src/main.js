const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})