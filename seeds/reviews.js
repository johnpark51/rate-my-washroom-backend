// import seed data files, arrays of objects
import reviewsData from "../seed-data/reviewsData.js";

export async function seed(knex) {
  await knex("reviews").del();
  await knex("reviews").insert(reviewsData);
}