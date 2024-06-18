import { button } from "../../components/button.js";

export default function renderCharacter(character) {
	const container = document.querySelector("#container");
	container.innerHTML = "";

	const detailsDiv = document.createElement("div");
	detailsDiv.className = "detailsDiv";

	const { name, image, species, status, origin, location } = character;

	const detailsImage = document.createElement("img");
	detailsImage.setAttribute("src", image);
	detailsImage.setAttribute("id", "detailsImage");

	const nameParagraph = document.createElement("p");
	nameParagraph.innerText = `Name: ${name}`;

	const speciesParagraph = document.createElement("p");
	speciesParagraph.innerText = `Species: ${species}`;

	const statusParagraph = document.createElement("p");
	statusParagraph.innerText = `Status: ${status}`;

	const originParagraph = document.createElement("p");
	originParagraph.innerText = `Origin: ${origin.name}`;

	const locationParagraph = document.createElement("p");
	locationParagraph.innerText = `Location: ${location.name}`;

	const detailsButton = button(
		"btn-dark",
		"detailsButton",
		"Go Back",
		"visible"
	);
	detailsButton.addEventListener("click", () => {
		window.history.back();
	});

	container.appendChild(detailsDiv);

	detailsDiv.appendChild(detailsImage);
	detailsDiv.appendChild(nameParagraph);
	detailsDiv.appendChild(speciesParagraph);
	detailsDiv.appendChild(statusParagraph);
	detailsDiv.appendChild(originParagraph);
	detailsDiv.appendChild(locationParagraph);
	detailsDiv.appendChild(detailsButton);
}
