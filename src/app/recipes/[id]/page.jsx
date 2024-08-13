import getData from "@/utils/getData";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

async function RecipesBaseOnID({ params }) {
  const recipesData = await getData("https://dummyjson.com/recipes");
  const individualRecipes = recipesData.recipes.filter((item) => {
    if (item.id == params.id) {
      return item;
    }
  });
  return (
    <Container>
      <Stack marginTop={10}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="h2">
                ID: {individualRecipes[0].id}
              </Typography>
              <Typography variant="h5">
                Title:{individualRecipes[0].name}
              </Typography>

              <ul>
                <b>Ingredients:</b>
                {individualRecipes[0].ingredients.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>

              <Typography variant="body2">
                Instructions:{individualRecipes[0].instructions}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Container>
  );
}

export default RecipesBaseOnID;
