import useTrailer from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
export default function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return;
  if (error) throw error;
  console.log(data);

  const first = data?.results[0];

  return first ? (
    <video src={first?.data[480]} poster={first?.preview} controls />
  ) : null;
}
