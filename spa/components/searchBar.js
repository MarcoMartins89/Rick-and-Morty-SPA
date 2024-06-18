import { button } from "./button.js";

function addSearchBar(nextPage, previousPage) {
	const searchBar = document.createElement("div");
	searchBar.id = "searchBarContainer";

	const prevButton = button(
		"prevButton",
		"prevButton",
		"<",
		previousPage,
		() => {
			window.location.hash = `#home?${previousPage.split("?")[1]}`;
		},
		"button",
		"click"
	);

	searchBar.appendChild(prevButton);

	const input = document.createElement("input");
	input.id = "searchBar";
	input.type = "search";
	input.placeholder = "Search Name";
	searchBar.appendChild(input);

	if (nextPage) {
		const nextButton = button(
			"nextButton",
			"nextButton",
			">",
			nextPage,
			() => {
				window.location.hash = `#home?${nextPage.split("?")[1]}`;
			},
			"button",
			"click"
		);
		searchBar.appendChild(nextButton);
	}

	return searchBar;
}

export { addSearchBar };
