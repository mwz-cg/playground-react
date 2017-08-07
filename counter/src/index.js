const express = require('express')
const app = express()

app.use(express.static('/project/target/dist'))

app.get('/items/count', function (req, res) {
  res.json(18)
})

const PORT = 3000
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
  console.log(`TECHIO> open --port ${PORT} /index.html`)
})
