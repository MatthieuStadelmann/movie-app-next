import movieApiClient from "../utils/apiClient";
import UpcomingMovies from "./UpcomingMovies";

export default async function UpcomingMoviesWrapper() {
  let data: ApiResponse<Movie> | null = null;
  let error: Error | null;

  try {
    // Fetch the movie data on the server
    data = await movieApiClient.getMovieListUpcoming();
  } catch (err) {
    error = err as Error;
  }

  return <UpcomingMovies data={data} />;
}
