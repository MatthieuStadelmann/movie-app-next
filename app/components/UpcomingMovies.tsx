"use client"
import React, { useContext } from "react";
import MovieSlider from "./MovieSlider";
import { DarkModeContext } from "../store/context";

interface UpcomingMoviesProps {
  data: ApiResponse<Movie> | null;
}

export default function UpcomingMovies({ data }: UpcomingMoviesProps) {
  const { theme } = useContext(DarkModeContext);

  return (
    <MovieSlider
      movieList={data?.results}
      headingText={"Upcoming"}
      error={null}
      loading={false}
      listType={"upcoming"}
    />
  );
}
