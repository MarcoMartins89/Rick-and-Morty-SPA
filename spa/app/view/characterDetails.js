import { button } from "../../components/button.js";
import { banner } from "../../components/banner.js";

export default function renderCharacter(character) {
	const container = document.querySelector("#container");
	container.innerHTML = "";

	const detailsDiv = document.createElement("div");
	detailsDiv.className = "detailsDiv";

	const paragraphDiv = document.createElement("div");
	paragraphDiv.className = "pDiv";

	const detailsBanner = banner();

	const { name, image, species, status, origin, location } = character;

	const detailsImage = document.createElement("img");
	detailsImage.setAttribute("src", image);
	detailsImage.setAttribute("id", "detailsImage");

	const nameParagraph = document.createElement("p");
	nameParagraph.innerText = `Name: ${name}`;
	nameParagraph.className = "detailsP pName";

	const speciesParagraph = document.createElement("p");
	speciesParagraph.innerText = `Species: ${species}`;
	speciesParagraph.className = "detailsP";

	const statusParagraph = document.createElement("p");
	statusParagraph.innerText = `Status: ${status}`;
	statusParagraph.className = "detailsP";

	const originParagraph = document.createElement("p");
	originParagraph.innerText = `Origin: ${origin.name}`;
	originParagraph.className = "detailsP";

	const locationParagraph = document.createElement("p");
	locationParagraph.innerText = `Last know location: ${location.name}`;
	locationParagraph.className = "detailsP";

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

	detailsDiv.appendChild(detailsBanner);
	detailsBanner.appendChild(detailsImage);
	detailsDiv.appendChild(paragraphDiv);
	paragraphDiv.appendChild(nameParagraph);
	paragraphDiv.appendChild(speciesParagraph);
	paragraphDiv.appendChild(statusParagraph);
	paragraphDiv.appendChild(originParagraph);
	paragraphDiv.appendChild(locationParagraph);
	paragraphDiv.appendChild(detailsButton);
}
