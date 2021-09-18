export const paths = {
  HOME: "/",
  MOVIE_DETAILS: `/movies/:movieTitle/:movieId`,
};

export const toPaths = {
  HOME: () => paths.HOME,
  MOVIE_DETAILS: ({ id, title }: { id: string; title: string }) =>
    `/movies/${title}/${id}`,
};
