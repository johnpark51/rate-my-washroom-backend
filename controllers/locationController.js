import {
    fetchOneLocation as fetchOneLocationService,
    getLocations as getLocationsService,
    getLocationWashrooms as getLocationWashroomsService,
} from "../services/locationKnex.js"

/* FIND A LOCATION */
export const fetchOne = async (req, res) => {
    try {
      const location = await fetchOneLocationService(req.params.id);
      return res.status(200).json(location);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  /* GET LOCATION + ITS WASHROOMS */
export const getLocationWashrooms = async (req, res) => {
  try {
    const result = await getLocationWashroomsService(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*GET ALL LOCATIONS*/
export const getLocations = async (_req, res) => {
  try {
    let locations = await getLocationsService();
    return res.status(200).json(locations)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}