const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")

const filesRoutes = require("./routes/files")
const usersRoutes = require("./routes/users")

app.use(cors())

// on rend accessible/publique le dossier /public
app.use(express.static('public'))

app.use('/files', filesRoutes)
app.use('/users', usersRoutes)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})