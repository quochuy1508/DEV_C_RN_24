const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe';

export async function getNews() {
	let result = await fetch(url).then((response) => response.json());
	return result.articles;
}
