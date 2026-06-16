import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Screenshoot } from "../entities/Screenshots";

const useScreenshots = (gameId: string) => {
  const apiClient = new APIClient<Screenshoot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
