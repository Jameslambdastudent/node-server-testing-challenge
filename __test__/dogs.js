const supertest = require('supertest')
const server = require('../server')
const db = require('../data/config')

describe("dog tests", () => {
	it("gets a list of dogs", async () => {
		const res = await supertest(server).get("/dogs")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.length).toBe(4)
		expect(res.body[0].id).toBe(1)
		expect(res.body[0].name).toBe("sammy")
    })


    it("gets a hobbit by the id", async () => {
		const res = await supertest(server).get("/dogs/2")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.id).toBe(2)
		expect(res.body.name).toBe("paul")
	})

	it("returns a 404 if dogs is not found", async () => {
		const res = await supertest(server).get("/dogs/5")
		expect(res.statusCode).toBe(404)
		expect(res.type).toBe("application/json")
		expect(res.body.message).toBe("lost dog")
	})

	it("creates a dog", async () => {
		const res = await supertest(server)
			.post("/dogs")
			.send({ name: "bob", species:"pitbull" })
		expect(res.statusCode).toBe(201)
		expect(res.type).toBe("application/json")
		expect(res.body.name).toBe("bob")
	})
})