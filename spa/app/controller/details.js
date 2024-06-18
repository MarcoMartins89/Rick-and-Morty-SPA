import renderCharacter from "../view/characterDetails.js";
import { getId } from "../service/api.js";
import { loading } from "../view/loading.js";

function getPath() {
	const { hash } = window.location;
	const slashIndex = hash.lastIndexOf("/");
	return hash.slice(slashIndex + 1);
}

export default async function init() {
	loading();
	try {
		const data = await getId(getPath());

		renderCharacter(data);
	} catch (error) {
		console.error("Error fetching character data:", error);
		error();
	}
}
