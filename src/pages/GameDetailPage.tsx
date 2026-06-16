import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { ComponentType } from "react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

import GameAtributes from "../components/GameAtributes";
import GameTrailer from "../components/GameTrailer";
import Screenshot from "../components/GameScreenshot";
const GameTrailerComponent = GameTrailer as ComponentType<{ gameId: number }>;

export default function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAtributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailerComponent gameId={game?.id} />
        <Screenshot slug={game.slug} />
      </GridItem>
    </SimpleGrid>
  );
}
