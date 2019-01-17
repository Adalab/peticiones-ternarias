const ENDPOINT = "http://api.tvmaze.com/search/shows?q=";

const fetchReasons = (query) => fetch(ENDPOINT + query).then(response => response.json());

export { fetchReasons };