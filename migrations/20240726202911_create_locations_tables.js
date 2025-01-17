/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema.createTable("locations", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.string("city").notNullable();
		table.string("description", 1000).notNullable();
		table.string("image").notNullable();
		table.text("lat").notNullable();
		table.text("lng").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table
			.timestamp("updated_at")
			.defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema.dropTable("locations");
}