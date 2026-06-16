import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

import GameAtributes from "../components/GameAtributes";
import GameTrailer from "../components/GameTrailer";
import GameImage from "../components/GameScreenshot";
export default function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAtributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameImage game_pk={game.slug} />
    </Box>
  );
}
