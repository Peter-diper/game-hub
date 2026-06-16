import { Grid, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  game_pk: string;
}

export default function GameImage({ game_pk }: Props) {
  const { data, error, isLoading } = useScreenshots(game_pk);

  if (isLoading) return null;
  if (error || !data) throw error;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3  }}
      gap={5}
      marginTop={10}
      marginX={"auto"}
      width={"100%"}
      maxWidth={"1200px"}
    >
      {data?.results.map((p) => (
        <Image key={p.id} borderRadius={25} src={p.image} />
      ))}
    </SimpleGrid>
  );
}
