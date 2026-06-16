import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}

export default function ExpandableText({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;
  if (!children) {
    return null;
  }

  if (children.length <= limit) return <Text> {children}</Text>;

  const summary = isExpanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        size={"sm"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setIsExpanded(!isExpanded)}
        marginLeft={2}
      >
        {isExpanded ? "Show less" : "Show More"}
      </Button>
    </Text>
  );

  return <div>ExpandableText</div>;
}
