import usePlatforms, { Platform } from "./usePlatforms";

export function usePlatform(id: number | undefined) {
  const { data: platfroms } = usePlatforms();
  return platfroms?.results.find((p: Platform) => p.id === id);
}
  