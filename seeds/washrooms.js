// import seed data files, arrays of objects
import washroomsData from "../seed-data/washroomsData.js";

export async function seed(knex) {
  await knex("washrooms").del();
  await knex("washrooms").insert(washroomsData);
}