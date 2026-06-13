import usePlatforms from "./usePlatforms";

export function usePlatform(id: number | undefined) {
  const { data: platfroms } = usePlatforms();
  return platfroms?.results.find((p) => p.id === id);
}
