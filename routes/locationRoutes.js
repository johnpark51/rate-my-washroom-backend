import express from "express";
import {
    fetchOne,
    getLocationWashrooms,
    getLocations
} from "../controllers/locationController.js"
const router = express.Router();

router
  .route("/")
  .get(getLocations);

/* LOCATION BY ID */
router
  .route("/:id")
  .get(fetchOne);

/* LOCATIONS WASHROOMS BY ID */
router
  .route("/:id/washrooms")
  .get(getLocationWashrooms);

export default router;