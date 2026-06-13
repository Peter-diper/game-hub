import useGenres from "./useGenres";

export function useGenre(id?: number) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === id);
  return genre;
}
