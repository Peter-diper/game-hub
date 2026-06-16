import useGenres from "./useGenres";
import { Genre } from "../entities/Genre";

export function useGenre(id?: number) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g: Genre) => g.id === id);
  return genre;
}
