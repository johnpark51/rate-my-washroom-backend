import {
	getWashroomById as getWashroomByIdService,
	getWashrooms as getWashroomsService,
	getWashroomReviews as getWashroomReviewsService,
	postWashroom as postWashroomService,
} from "../services/washroomsKnex.js";

/*GET ALL WASHROOMS*/
export const getWashrooms = async (_req, res) => {
	try {
		let washrooms = await getWashroomsService();
		return res.status(200).json(washrooms);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/* FIND A WASHROOM */
export const fetchOne = async (req, res) => {
	try {
		const washroom = await getWashroomByIdService(req.params.id);
		return res.status(200).json(washroom);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/* GET WASHROOM + ITS REVIEWS */
export const getWashroomReviews = async (req, res) => {
	try {
		const result = await getWashroomReviewsService(req.params.id);
		return res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/* POST WASHROOM */
export const postWashroom = async (req, res) => {
	try {
	  const result = await postWashroomService(req.body);
	  return res.status(201).json(result);
	} catch (error) {
	  res.status(500).json({ message: error.message });
	}
  };
  
