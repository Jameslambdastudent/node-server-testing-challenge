exports.up = async function(knex) {
	await knex.schema.createTable("dogs", (tbl) => {
		tbl.increments()
        tbl.text("name").notNullable()
        tbl.text("species").notNullable().unique()
        
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("dogs")
}