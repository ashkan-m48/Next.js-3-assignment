import MaterialCard from "@/components/MaterialCards";
import getData from "@/utils/getData";
import { CircularProgress, Container, Stack } from "@mui/material";
import { Suspense } from "react";

async function Users() {
  const data = await getData("https://dummyjson.com/users");

  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        margin="45px"
        gap="10px"
      >
        <Suspense fallback={<CircularProgress />}>
          {data.users.map((item, i) => (
            <MaterialCard users={item} key={i} />
          ))}
        </Suspense>
      </Stack>
    </Container>
  );
}

export default Users;
