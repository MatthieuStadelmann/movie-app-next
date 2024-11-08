const placeholder = "/movie-placeholder.png";

export enum ImageSize {
  small = "small",
  medium = "medium",
  large = "large",
  micro = "micro",
}

export default class ApiClient {
  private apiKey: string;
  private apiUrl: string;
  private imageUrl: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.imageUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  }

  private async fetchFromApi<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      return data as T;
    } catch (err) {
      // console.error(err);
      // TODO: push the error to a logging service
      throw new Error("An error has occurred while fetching data");
    }
  }

  buildMoviePosterUrl(
    relativeUrl: string,
    size: ImageSize = ImageSize.small
  ): string {
    if (!relativeUrl) return placeholder;
    const apiImgSizes = {
      micro: "w92",
      small: "w154",
      medium: "w500",
      large: "w600_and_h900_bestv2",
    };
    const imageSize = apiImgSizes[size];
    const baseUrl = "https://image.tmdb.org/t/p";
    return `${baseUrl}/${imageSize}${relativeUrl}`;
  }

  async getMovieDetail(movieId: string): Promise<FullMovieResponse> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.fetchFromApi<FullMovieResponse>(url);
  }

  async getMovieList(
    searchText = "star wars",
    currentPage = 1
  ): Promise<ApiResponse<Movie> | ApiError> {
    const url = `${this.apiUrl}/search/movie?query=${searchText}&page=${currentPage}&api_key=${this.apiKey}`;
    return this.fetchFromApi<ApiResponse<Movie>>(url);
  }

  async getMovieReviewList(movieId: string): Promise<ApiResponse<MovieReview>> {
    const url = `${this.apiUrl}/movie/${movieId}/reviews?api_key=${this.apiKey}`;
    return this.fetchFromApi<ApiResponse<MovieReview>>(url);
  }

  async getMovieListNowPlaying(): Promise<ApiResponse<Movie>> {
    const url = `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`;
    return this.fetchFromApi<ApiResponse<Movie>>(url);
  }

  async getMovieSimilar(movieId: string): Promise<ApiResponse<Movie>> {
    const url = `${this.apiUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey}`;
    return this.fetchFromApi<ApiResponse<Movie>>(url);
  }

  async getMovieListTopRated(): Promise<ApiResponse<Movie>> {
    const url = `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`;
    return this.fetchFromApi<ApiResponse<Movie>>(url);
  }

  async getMovieListUpcoming(): Promise<ApiResponse<Movie>> {
    const url = `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`;
    return this.fetchFromApi<ApiResponse<Movie>>(url);
  }

  async getMovieCredits(movieId: string): Promise<MovieCreditsResponse> {
    const url = `${this.apiUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.fetchFromApi<MovieCreditsResponse>(url);
  }

  async getMovieImages(movieId: string): Promise<MovieImageResponse> {
    const url = `${this.apiUrl}/movie/${movieId}/images?api_key=${this.apiKey}`;
    return this.fetchFromApi<MovieImageResponse>(url);
  }
}
