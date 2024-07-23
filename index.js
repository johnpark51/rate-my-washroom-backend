import "dotenv/config";
import express from "express";
import cors from "cors";

import locationRoutes from "./routes/locationRoutes.js";
import washroomRoutes from "./routes/washroomRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static("public"));

/* MIDDLEWARE */
app.use(
	cors({
		origin: process.env.CORS_URL,
		methods: "GET,PUT,PATCH,POST,DELETE",
		credentials: true,
	})
);
app.use(express.json());

/* ROUTES */
app.use("/api/locations", locationRoutes);
app.use("/api/washrooms", washroomRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, () => {
	console.log(`Running at http://localhost:${PORT}`);
});
