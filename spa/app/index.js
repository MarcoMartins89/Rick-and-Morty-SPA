import * as routes from "./routes.js";

function route() {
	const windowHash = window.location.hash;

	let route = Object.values(routes).find(({ hash }) =>
		windowHash.startsWith(hash)
	);

	if (!route) {
		route = routes.home;
		window.location.hash = route.hash;
	}

	route.init();
}

window.onhashchange = route;
route();
