const API_URL = "https://rickandmortyapi.com/api/character";

const get = async function (url) {
	const data = await fetch(url);
	return await data.json();
};

async function getCharacters(params = "") {
	const response = await fetch(`${API_URL}?${params}`);

	if (!response.ok) {
		throw new Error();
	}

	const list = await response.json();
	return list;
}

async function getId(id) {
	try {
		return get(`${API_URL}/${id}`);
	} catch ({ responseJSON }) {
		throw Error(responseJSON.error);
	}
}

export { getCharacters, getId };
