import initKnex from "knex";
import config from "../knexfile.js";
const knex = initKnex(config);

/* GET ALL REVIEWS */
export const getReviews = async () => {
    try {
      const reviews = await knex
      .join("washrooms", "washrooms.id", "reviews.washroom_id")
      .select(
        "reviews.id", 
        "reviews.name", 
        "reviews.content",
        "reviews.washroom_id", 
        "reviews.timestamp",
        "reviews.rating",
        "washrooms.address",
        "washrooms.location"
      )
      .from("reviews");
      if (!reviews) {
        throw new Error("Review not found");
      }
      return reviews;
    } catch (error) {
      throw new Error(error);
    }
  };

  /* GET REVIEWS BY ID */
export const fetchOneReview = async (id) => {
    try {
      const one = await knex("reviews").where({ id: id }).first();
      if (!one) {
        throw new Error("Review not found");
      }
      return one;
    } catch (error) {
      throw new Error(error);
    }
  };

  /* POST REVIEW */
  export const postReview = async (review) => {
    try {
      const reviewIds = await knex("reviews").insert(review);
      const reviewArray = await knex("reviews").where({
        id: reviewIds[0],
      });
      const returnReview = reviewArray[0];
      return {
        id: returnReview.id,
        name: returnReview.name,
        content: returnReview.content,
        washroom_id: returnReview.washroom_id,
        timestamp: returnReview.timestamp,
        rating: returnReview.rating
      };
    } catch (error) {
      throw new Error(error);
    }
  }