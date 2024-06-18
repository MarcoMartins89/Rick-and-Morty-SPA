import { button } from "../../components/button.js";

const ERROR_IMG = "../../images/404.jpg";
const ERROR_TXT = "404 Not Found";

function image() {
	const image = document.createElement("img");
	image.setAttribute("src", ERROR_IMG);
	image.className = "error-image";

	return image;
}

function errorMessage() {
	const goBackButton = button(
		"btn-dark",
		"detailsButton",
		"Go Back",
		"visible"
	);
	goBackButton.addEventListener("click", () => {
		window.location.replace("#home/");
	});

	const errorMessage = document.createElement("h1");
	errorMessage.className = "error-message";
	errorMessage.innerText = ERROR_TXT;
	errorMessage.appendChild(goBackButton);

	return errorMessage;
}

function error(message) {
	const container = document.querySelector("#container");

	container.innerHTML = "";

	const errorContainer = document.createElement("div");
	errorContainer.className = "error-container";

	errorContainer.appendChild(image());
	errorContainer.appendChild(errorMessage(message));

	container.appendChild(errorContainer);
}

export { error };
