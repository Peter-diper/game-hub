import usePlatforms, { Platform } from "./usePlatforms";

const { data: platfroms } = usePlatforms();

export function useFindPlatform(selectedPlatformId: number | undefined) {
  return platfroms.results.find((p) => p.id === selectedPlatformId);
}
