import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();
  isRouteErrorResponse(error);

  return (
    <div>
      <NavBar />
      <Box padding={5} textAlign="center">
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Invalid Page dude ... 🫨"
            : "Unexpected error"}
        </Text>
      </Box>
    </div>
  );
}
