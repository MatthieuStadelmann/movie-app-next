import { GetStaticProps } from "next";
// import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import { PageContainer } from "./components/styled";
import movieApiClient from "./utils/apiClient";
import TrendingNow from "./components/TrendingNow";
import UpcomingMovies from "./components/UpcomingMovies";
import TopRated from "./components/TopRatedMovies";
import TrendingNowWrapper from "./components/TrendingNowWrapper";

interface MainPageProps {}

export default async function MainPage({}: MainPageProps) {
  // const searchParams = useSearchParams();
  // const searchInputParam = searchParams.get("search") || "Star Wars";
  // const currentPageParam = Number(searchParams.get("page")) || 1;

  // const [currentPage, setCurrentPage] = useState<number>(Number(currentPageParam));
  // const [searchText, setSearchText] = useState<string>(String(searchInputParam));

  // const [movieList, setMovieList] = useState<Movie[]>(initialMovies);
  // const [error, setFetchError] = useState<ApiError | null>();
  // const [loading, setLoading] = useState<boolean>(false);
  // const [totalPages, setTotalPages] = useState<number>(initialTotalPages);
  // const [suggestions, setSuggestions] = useState<string[]>([]);

  // async function getMovies(searchText: string, currentPage: number) {
  //   setLoading(true);
  //   const response = await movieApiClient.getMovieList(searchText, currentPage);
  //   if ("message" in response) {
  //     setFetchError({
  //       message: "An error occurred while fetching the movies",
  //       isError: true,
  //     });
  //   } else {
  //     setMovieList(response.results);
  //     setTotalPages(response.total_pages);
  //     setSuggestions([]);
  //   }
  //   setLoading(false);

  //   router.push(
  //     {
  //       pathname: "/",
  //       query: { search: searchText, page: currentPage },
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  // }

  // async function getSuggestions(text: string) {
  //   const response = await movieApiClient.getMovieList(text, 1);
  //   if (!("message" in response)) {
  //     setSuggestions(response.results.map((movie) => movie.title));
  //   }
  // }

  // useEffect(() => {
  //   getMovies(searchText, currentPage);
  // }, []);

  // function onSearchButtonClick() {
  //   setSuggestions([]);
  //   setCurrentPage(1);
  //   getMovies(searchText, 1);
  // }

  // function onChangeSearchText(text: string) {
  //   if (text === "") {
  //     setSuggestions([]);
  //     setSearchText("");
  //   } else {
  //     setSearchText(text);
  //     getSuggestions(text);
  //   }
  // }

  // function onPageChange(page: number) {
  //   setCurrentPage(page);
  //   getMovies(searchText, page);
  // }

  // function onSuggestionClick(suggestion: string) {
  //   setSearchText(suggestion);
  //   setCurrentPage(1);
  //   getMovies(suggestion, 1);
  // }

  return (
    <PageContainer>
      {/* <SearchBar
        onSuggestionClick={onSuggestionClick}
        onChange={onChangeSearchText}
        value={searchText}
        onButtonClick={onSearchButtonClick}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
      <MovieList movieList={movieList} error={error} loading={loading} /> */}
      {/* <Pagination
        currentPage={currentPage}
        lastPage={totalPages}
        onPageChange={onPageChange}
      /> */}
      <TrendingNowWrapper />
      {/* <TopRated />
      <UpcomingMovies /> */}
    </PageContainer>
  );
}

export const revalidate = 86400; // Revalidate every 24 hours
