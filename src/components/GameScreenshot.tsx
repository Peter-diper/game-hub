import { Grid, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  slug: string;
}

export default function Screenshot({ slug }: Props) {
  const { data, error, isLoading } = useScreenshots(slug);
  
  if (isLoading) return null;
  if (error || !data) throw error;

  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      gap={2}
      marginTop={3}
      marginX={"auto"}
      width={"100%"}
      maxWidth={"1200px"}
    >
      {data?.results.map((p) => (
        <Image key={p.id} borderRadius={12} src={p.image} />
      ))}
      <button></button>
    </SimpleGrid>
  );
}
