const express = require("express")
const server = express()
const dogsRouter = require('./dogs/dogs-router')


server.use(express.json())
server.use("/dogs", dogsRouter)


server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server