import { addSearchBar } from "../../components/searchBar.js";
import { addCard } from "../../components/card.js";
import { banner } from "../../components/banner.js";
import { button } from "../../components/button.js";

export default function render(data) {
	const { info, results } = data;
	const { prev, next } = info;

	const container = document.querySelector("#container");
	container.innerHTML = "";

	container.appendChild(banner());
	container.appendChild(addSearchBar(next, prev));

	const cardContainer = document.createElement("div");
	cardContainer.className = "cardContainer";

	function hasParameter(parameter) {
		return window.location.hash.includes(parameter);
	}

	const input = document.querySelector("#searchBar");
	const clearSearch = button(
		"btn-dark hidden",
		"clearSearch",
		"Clear Search",
		!input.value,
		() => {
			input.value = "";
			clearSearch.classList.toggle("visible", input.value.length > 0);
			clearSearch.classList.toggle("hidden", input.value.length === 0);
			window.location.hash = `#home`;
		},
		"button",
		"click"
	);

	const searchButton = button(
		"searchButton",
		"searchButton",
		"Search",
		!input.value,
		() => {
			const inputData = input.value.trim();
			window.location.hash = `#home?name=${inputData}`;
		},
		"button",
		"click"
	);

	container.appendChild(searchButton);
	container.appendChild(clearSearch);

	input.addEventListener("change", () => {
		clearSearch.classList.toggle("visible", input.value.length > 0);
		clearSearch.classList.toggle("hidden", input.value.length === 0);
	});

	container.appendChild(cardContainer);

	results.forEach(({ name, image, species, id }) => {
		const characterInfo = addCard(name, image, species, id);

		cardContainer.appendChild(characterInfo);
	});
}
