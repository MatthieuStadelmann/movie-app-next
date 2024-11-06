// MainPageWrapper.tsx (Server Component)
import TrendingNowWrapper from "./components/TrendingNowWrapper";
import TopRatedMoviesWrapper from "./components/TopRatedMoviesWrapper";
import UpcomingMoviesWrapper from "./components/UpcomingMoviesWrapper";
import MainPage from "./components/MainPage"; // Client Component
import movieApiClient from "./utils/apiClient";
import { PageContainer } from "./components/styled";

export default async function MainPageWrapper() {
  // Fetch initial movie list data server-side
  const initialData = await movieApiClient.getMovieList("Star Wars", 1);

  return (
    <PageContainer>
      <MainPage initialData={initialData} />
      <TrendingNowWrapper />
      <TopRatedMoviesWrapper />
      <UpcomingMoviesWrapper />
    </PageContainer>
  );
}
