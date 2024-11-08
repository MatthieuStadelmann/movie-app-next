import React, { memo } from "react";
import Link from "next/link";
import styled from "styled-components";

import movieApiClient from "../utils/apiClient";
import settings from "../settings";
import { ImageSize } from "../utils/MovieApiClient";

interface SimpleCardProps {
  movie: Movie;
  "data-testid": string;
}

function SimpleSliderCard({
  movie,
  "data-testid": dataTestId,
}: SimpleCardProps) {
  return (
    <SimpleCardContainer
      data-testid={dataTestId}
      role="listitem"
      aria-label={`${movie.title} movie card`}
    >
      <Link
        href={`/movie/${movie.id}`}
        aria-label={`View details of ${movie.title}`}
      >
        <SimpleCardImage
          loading="lazy"
          width={"152"}
          src={movieApiClient.buildMoviePosterUrl(
            movie.poster_path,
            ImageSize.small
          )}
          data-testid={`simple-movie-card-${movie.id}`}
          alt={`${movie.title} poster`}
        ></SimpleCardImage>
      </Link>
    </SimpleCardContainer>
  );
}
export default memo(SimpleSliderCard);

const SimpleCardContainer = styled.div`
  flex: 0 0 auto;
  margin-left: 2px;
  margin-right: 2px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, rotate 0.3s ease;
  border-radius: 5px;
  M &:hover {
    transform: scale(1.02) rotate(-0.5deg);
    box-shadow: 0 5px 10px ${settings.colors.shadow};
  }
`;

const SimpleCardImage = styled.img`
  height: 200px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
