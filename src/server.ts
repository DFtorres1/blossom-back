import dotenv from "dotenv";
import app from "./app";
import graphqlHandler from "./graphql";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.all("/graphql", graphqlHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
