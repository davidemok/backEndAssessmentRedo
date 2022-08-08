const cors = require("cors")
const express = require("express")
const app = express()

app.use(express.json())
app.use(cors())

let functions = require("./Server/controller")

app.get("/anime", functions.getDavidAnime)
app.get("/anime/random", functions.getRandom)
app.post("/anime/:newAnime", functions.createAnime)
app.delete("/anime/:newAnime", functions.deleteAnime)
app.put("/anime/:index", functions.putList)
app.listen(4000, console.log("we are a go at port 4000"))
