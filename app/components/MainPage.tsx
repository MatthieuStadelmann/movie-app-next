"use client";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { useSearchParams, useRouter } from "next/navigation";
import movieApiClient from "../utils/apiClient";

interface MainPageProps {
  initialData: ApiResponse<Movie> | ApiError;
}

export default function MainPage({ initialData }: MainPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("Star Wars");
  const [movieList, setMovieList] = useState<Movie[]>(
    "results" in initialData ? initialData.results : []
  );
  const [error, setFetchError] = useState<ApiError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(
    "total_pages" in initialData ? initialData.total_pages : 1
  );
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Client-side data fetching for movie list
  useEffect(() => {
    if (searchText !== "Star Wars" || currentPage !== 1) {
      getMovies(searchText, currentPage);
    }
  }, [searchText, currentPage]);

  async function getMovies(searchText: string, currentPage: number) {
    setLoading(true);
    const response = await movieApiClient.getMovieList(searchText, currentPage);
    if ("message" in response) {
      setFetchError({
        message: "An error occurred while fetching the movies",
        isError: true,
      });
    } else {
      setMovieList(response.results);
      setTotalPages(response.total_pages);
      setSuggestions([]);
    }
    setLoading(false);
    // router.push(`/?search=${searchText}&page=${currentPage}`);
  }

  async function getSuggestions(text: string) {
    const response = await movieApiClient.getMovieList(text, 1);
    // missing error and loading state
    if (!("message" in response)) {
      setSuggestions(response.results.map((movie) => movie.title));
    }
  }

  function onSearchButtonClick() {
    setSuggestions([]);
    setCurrentPage(1);
    getMovies(searchText, 1);
  }

  function onChangeSearchText(text: string) {
    if (text === "") {
      setSuggestions([]);
      setSearchText("");
    } else {
      setSearchText(text);
      getSuggestions(text);
    }
  }

  function onPageChange(page: number) {
    setCurrentPage(page);
    getMovies(searchText, page);
  }

  function onSuggestionClick(suggestion: string) {
    setSearchText(suggestion);
    setCurrentPage(1);
    getMovies(suggestion, 1);
  }

  return (
    <>
      <SearchBar
        onSuggestionClick={onSuggestionClick}
        onChange={onChangeSearchText}
        value={searchText}
        onButtonClick={onSearchButtonClick}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
      <MovieList movieList={movieList} error={error} loading={loading} />
      <Pagination
        currentPage={currentPage}
        lastPage={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
}
