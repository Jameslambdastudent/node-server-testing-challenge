exports.seed = async function(knex) {
	await knex("dogs").truncate()
	await knex("dogs").insert([
    { name: "sammy", species: "bulldog"},
    { name: "paul", species: "poodle"},
    { name: "jim", species: "boxer"},
    { name: "nelk", species: "pug"},
	
	])
}