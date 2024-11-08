import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import { ErrorMessage } from "./styled";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface MovieListProps {
  movieList: Movie[];
  error?: ApiError | null;
  loading?: boolean;
}

const movieCardSkeletonList = Array.from({ length: 20 }, (_, i) => i + 1);

export default function MovieList({
  movieList,
  error,
  loading,
}: MovieListProps) {
  return (
    <MovieListContainer>
      {loading && (
        <MovieCardListWrapper role="list" data-testid="movie-list">
          {movieCardSkeletonList.map((key: number) => (
            <MovieCardSkeleton key={key} />
          ))}
        </MovieCardListWrapper>
      )}
      {!error && !loading && (
        <MovieCardListWrapper role="list" data-testid="movie-list">
          {movieList &&
            movieList.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </MovieCardListWrapper>
      )}
      {error && (
        <ErrorMessage aria-live="polite" data-testid="main-movie-list-error">
          {error.message}
        </ErrorMessage>
      )}
    </MovieListContainer>
  );
}

const MovieCardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: var(--breakpoint-lg)) {
    flex-direction: row;
  }

  @media (max-width: var(--breakpoint-md)) {
    flex-direction: row;
  }

  @media (max-width: var(--breakpoint-sm)) {
    flex-direction: column;
  }
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
