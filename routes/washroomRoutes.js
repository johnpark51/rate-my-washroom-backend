import express from "express";
import {
    getWashrooms,
    fetchOne,
    getWashroomReviews,
    postWashroom
} from "../controllers/washroomController.js"
const washroomRouter = express.Router();

/* BASE */
washroomRouter
  .route("/")
  .get(getWashrooms)
  .post(postWashroom)

/* WASHROOM BY ID */
washroomRouter
  .route("/:id")
  .get(fetchOne);

/* LOCATIONS WASHROOMS BY ID */
washroomRouter
  .route("/:id/reviews")
  .get(getWashroomReviews);

export default washroomRouter;