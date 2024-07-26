/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema.createTable("reviews", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.string("content", 1000).notNullable();
        table.integer("rating").notNullable();
		table
			.integer("washroom_id")
			.unsigned()
			.references("id")
			.inTable("washrooms");
		table.timestamp("timestamp").notNullable();
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
	return knex.schema.dropTable("reviews");
}