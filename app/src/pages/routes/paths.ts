export const paths = {
  HOME: "/",
  MOVIE_DETAILS: `/movies/:title/:id`,
};

export const toPaths = {
  HOME: () => paths.HOME,
  MOVIE_DETAILS: ({ id, title }: { id: string; title: string }) =>
    `/movies/${title}/${id}`,
};
