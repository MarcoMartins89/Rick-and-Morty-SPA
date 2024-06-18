import { getCharacters } from "../service/api.js";
import homeView from "../view/home.js";
import { loading } from "../view/loading.js";
import { error as errorView } from "../view/error.js";

function hasParameters() {
	return window.location.hash.split("?")[1];
}

export default async function init() {
	loading();
	try {
		const data = await getCharacters(hasParameters());
		homeView(data);
	} catch (error) {
		errorView();
	}
}
