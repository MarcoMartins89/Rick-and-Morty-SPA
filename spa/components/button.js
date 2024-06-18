function button(className, id, innerText, page, event, buttonType, eventType) {
	const button = document.createElement("button");
	button.className = className;
	button.id = id;
	button.innerText = innerText;
	button.style.visibility = page ? "visible" : "hidden";
	button.type = buttonType;
	button.addEventListener(eventType, event);

	return button;
}

export { button };
