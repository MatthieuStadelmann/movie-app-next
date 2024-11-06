"use client"
import React, { useContext } from "react";
import MovieSlider from "./MovieSlider";
import { DarkModeContext } from "../store/context";

interface TopRatedMoviesProps {
  data: ApiResponse<Movie> | null;
}

export default function TopRatedMovies({ data }: TopRatedMoviesProps) {
  const { theme } = useContext(DarkModeContext);
  return (
    <MovieSlider
      movieList={data?.results}
      headingText={"Top Rated"}
      error={null}
      loading={false}
      listType={"top-rated"}
    />
  );
}
