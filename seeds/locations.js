// import seed data files, arrays of objects
import locationsData from "../seed-data/locationsData.js";

export async function seed(knex) {
  await knex("locations").del();
  await knex("locations").insert(locationsData);
}