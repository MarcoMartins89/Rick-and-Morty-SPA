const LOADING_IMG = "./images/loading.jpg";
const LOADING_TXT = "Loading...";

function image() {
	const image = document.createElement("img");
	image.setAttribute("src", LOADING_IMG);
	image.className = "loading-img rotate";

	return image;
}

function loadingMessage() {
	const loadingMessage = document.createElement("h1");
	loadingMessage.className = "loading-message";
	loadingMessage.innerText = LOADING_TXT;

	return loadingMessage;
}

function loading() {
	const container = document.querySelector("#container");

	container.innerHTML = "";

	const loadingContainer = document.createElement("div");
	loadingContainer.className = "loading";

	loadingContainer.appendChild(image());
	loadingContainer.appendChild(loadingMessage());

	container.appendChild(loadingContainer);
}

export { loading };
