"use client"
import React, { useContext } from "react";
import MovieSlider from "./MovieSlider";
import { DarkModeContext } from "../store/context";

interface TrendingNowProps {
  data: ApiResponse<Movie> | null ;
}

export default function TrendingNow({ data }: TrendingNowProps) {
  const { theme } = useContext(DarkModeContext);

  return (
    <MovieSlider
      movieList={data?.results ?? []}
      headingText="Trending"
      error={null}
      loading={false}
      listType="trending"
    />
  );
}
