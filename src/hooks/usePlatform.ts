import usePlatforms from "./usePlatforms";
import { Platform } from "../entities/Platform";

export function usePlatform(id: number | undefined) {
  const { data: platfroms } = usePlatforms();
  return platfroms?.results.find((p: Platform) => p.id === id);
}
