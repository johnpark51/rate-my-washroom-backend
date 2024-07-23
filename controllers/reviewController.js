import {
	getReviews as getReviewsService,
	fetchOneReview as fetchOneReviewService,
	postReview as postReviewService,
} from "../services/reviewsKnex.js";

/*GET ALL REVIEWS*/
export const getReviews = async (_req, res) => {
	try {
		let reviews = await getReviewsService();
		return res.status(200).json(reviews);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/* FETCH A REVIEW */
export const fetchOne = async (req, res) => {
	try {
		const review = await fetchOneReviewService(req.params.id);
		return res.status(200).json(review);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/* POST REVIEW */
export const postReview = async(req,res) => {
	try {
		const data = req.body;
		const result = await postReviewService(data);
		return res.status(201).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message})
	}
}


