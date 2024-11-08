import MovieApiClient from "./MovieApiClient";

// Dependency Injection for Api Key
const apiClient = new MovieApiClient("https://api.themoviedb.org/3", "0c126fd7a3585b8ab6fde79467003509");

export default apiClient;

