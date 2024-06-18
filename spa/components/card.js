import { details } from "../app/routes.js";

function addCard(name, image, species, id) {
	const cardDiv = document.createElement("div");
	cardDiv.className = "card";
	cardDiv.id = `card-${id}`;

	const anchor = document.createElement("a");
	anchor.setAttribute("href", `${details.hash}/${id}`);

	const characterName = document.createElement("h3");
	characterName.innerText = name;

	const characterImage = document.createElement("img");
	characterImage.alt = "character image";
	characterImage.src = image;

	const characterType = document.createElement("div");
	characterType.innerText = species;

	anchor.appendChild(characterName);
	anchor.appendChild(characterImage);

	cardDiv.appendChild(anchor);
	cardDiv.appendChild(characterType);

	return cardDiv;
}

export { addCard };
