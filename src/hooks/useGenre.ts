import useGenres, { Genre } from "./useGenres";

export function useGenre(id?: number) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g: Genre) => g.id === id);
  return genre;
}
