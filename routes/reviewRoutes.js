import express from "express";
import {
    getReviews,
    fetchOne,
    postReview,
} from "../controllers/reviewController.js"
const router = express.Router();

router
  .route("/")
  .get(getReviews)
  .post(postReview)

/* REVIEW BY ID */
router
  .route("/:id")
  .get(fetchOne);

export default router;