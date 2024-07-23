/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema.createTable("washrooms", (table) => {
		table.increments("id").primary();
		table.string("address").notNullable();
		table.string("type").notNullable();
		table.string("location").notNullable();
		table.string("hours").notNullable();
		table.boolean("public_access").notNullable();
		table.boolean("wheelchair_accessible").notNullable();
		table.boolean("gender_neutral").notNullable();
		table.boolean("family_friendly").notNullable();
		table.boolean("sample").notNullable();
		table.integer("cleanliness").notNullable();
		table.specificType("coordinates", "POINT");
		table.integer("likes").notNullable().defaultTo(0);
		table.text("lat").notNullable();
		table.text("lng").notNullable();
		table
			.integer("location_id")
			.unsigned()
			.references("id")
			.inTable("locations")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
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
	return knex.schema.dropTable("washrooms");
}
