import movieApiClient from "../utils/apiClient";
import TrendingNow from "./TrendingNow"; 

export default async function TrendingNowWrapper() {
  let data: ApiResponse<Movie> | null = null;
  let error: Error | null;

  try {
    // Fetch the movie data on the server
    data = await movieApiClient.getMovieListNowPlaying();
  } catch (err) {
    error = err as Error;
  }
  return (
    <TrendingNow data={data} /> // Pass data as a prop to the client component
  );
}
