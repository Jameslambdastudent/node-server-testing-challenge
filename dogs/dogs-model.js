const db = require('../data/config')

function find() {
	return db("dogs")
}

function findById(id) {
	return db("dogs").where({ id }).first()
}

async function create(data) {
	const [id] = await db("dogs").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("dogs").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("dogs").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}