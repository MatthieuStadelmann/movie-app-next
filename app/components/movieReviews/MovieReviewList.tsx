import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import movieApiClient from "../../utils/apiClient";
import MovieReviewCard from "./MovieReviewCard";
import { ErrorMessage } from "../styled";
import LoadingIndicator from "../styled/LoadingIndicator";
import { DarkModeContext } from "@/app/store/context";

export default function MovieReviewList({ movieId }: { movieId: string }) {
  const { theme } = useContext(DarkModeContext);
  const [reviewList, setReviewList] = useState<MovieReview[] | null>(null);
  const [error, setFetchError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const data = await movieApiClient.getMovieReviewList(movieId);
        if ("message" in data) {
          setFetchError(error);
        } else {
          setReviewList(data.results);
        }
      } catch (error) {
        setFetchError({ message: "An error occurred", isError: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (error) {
    return (
      <ReviewListContainer>
        <ErrorMessage
          aria-live="assertive"
          data-testid="movie-review-list-error"
        >
          Error loading movie reviews
        </ErrorMessage>
      </ReviewListContainer>
    );
  }

  if (isLoading) {
    return (
      <ReviewListContainer>
        <LoadingIndicator data-testid="movie-review-list-loader" />
      </ReviewListContainer>
    );
  }

  return (
    <ReviewListContainer aria-label="Movie reviews list">
      <ReviewsHeading data-testid="movie-review-list" $color={theme.foreground}>
        User Reviews
      </ReviewsHeading>
      {reviewList?.map((review) => (
        <MovieReviewCard review={review} key={review.id} />
      ))}
    </ReviewListContainer>
  );
}

const ReviewListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

interface ReviewsHeadingProps {
  $color: string;
}

const ReviewsHeading = styled.h3<ReviewsHeadingProps>`
  color: ${({ $color }) => $color};
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  font-size: 1.6em;
`;
