let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')

let app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors())

let fetch = require('./fetch')
let insert = require('./insert')
let update = require('./update')
let remov = require('./delete')

app.use("/fetch", fetch)
app.use("/insert", insert)
app.use("/update", update)
app.use("/delete", remov)

let port = 8080
app.listen(port, () => {
    console.log("Server listening port no:- ", port)
})