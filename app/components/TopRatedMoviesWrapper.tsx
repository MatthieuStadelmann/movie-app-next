import movieApiClient from "../utils/apiClient";
import TopRatedMovies from "./TopRatedMovies"; // Import the client component

export default async function TopRatedMoviesWrapper() {
  let data: ApiResponse<Movie> | null = null;
  let error: Error | null;

  try {
    // Fetch the movie data on the server
    data = await movieApiClient.getMovieListTopRated();
  } catch (err) {
    error = err as Error;
  }
  return (
    <TopRatedMovies data={data} /> // Pass data as a prop to the client component
  );
}
