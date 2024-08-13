import MaterialCard from "@/components/MaterialCards";
import getData from "@/utils/getData";
import { CircularProgress, Container, Stack } from "@mui/material";
import { Suspense } from "react";

async function Recipes() {
  const data = await getData("https://dummyjson.com/recipes");

  return (
    <Container maxWidth="xl">
      <Suspense fallback={<p>loading...</p>}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          margin="45px"
          gap="10px"
        >
          {data.recipes.map((item, i) => (
            <MaterialCard recipes={item} key={i} />
          ))}
        </Stack>
      </Suspense>
    </Container>
  );
}

export default Recipes;
