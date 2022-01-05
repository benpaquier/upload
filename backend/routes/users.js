const express = require("express")
const app = express()
const fs = require("fs")

app.get('/', (req, res) => {
  fs.readFile('./users.json', (err, data) => {
    res.json(JSON.parse(data))
  })
})

module.exports = app
