function banner() {
	const bannerDiv = document.createElement("div");
	bannerDiv.id = "imageContainer";

	const banner = document.createElement("img");
	banner.id = "banner";
	banner.src = "/images/banner.jpg";

	bannerDiv.appendChild(banner);
	return bannerDiv;
}

export { banner };
