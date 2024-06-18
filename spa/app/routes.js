import homeController from "./controller/home.js";
import detailsController from "./controller/details.js";

export const home = {
	hash: "#home",
	init: homeController,
};

export const details = {
	hash: "#details",
	init: detailsController,
};
