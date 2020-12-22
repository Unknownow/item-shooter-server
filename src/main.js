const express = require('express')
const app = express()
const port = 2882

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})