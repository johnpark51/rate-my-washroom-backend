import initKnex from "knex";
import config from "../knexfile.js";
const knex = initKnex(config);

/* GET ALL LOCATIONS */
export const getLocations = async () => {
    try {
      const locations = await knex.select("*").from("locations");
      if (!locations) {
        throw new Error("Location not found");
      }
      return locations;
    } catch (error) {
      throw new Error(error);
    }
  };

  /* GET LOCATIONS BY ID */
export const fetchOneLocation = async (id) => {
    try {
      const one = await knex("locations").where({ id: id }).first();
      if (!one) {
        throw new Error("Location not found");
      }
      return one;
    } catch (error) {
      throw new Error(error);
    }
  };

  /* GET LOCATION + WASHROOMS */
export const getLocationWashrooms = async (id) => {
    try {
      const locationId = id;
      const location = await knex("locations")
        .where({ id: locationId })
        .first();
      if (!location) {
        throw new Error("Location not found");
      }
      const washrooms = await knex("washrooms").where({
        location_id: locationId,
      });
      const result = washrooms
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };