import dotenv from "dotenv";
import app from "./app";
import graphqlHandler from "./graphql";
import dbInstance from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 4000;

app.all("/graphql", graphqlHandler);

app.get("/", async (_, res) => {
  try {
    await dbInstance.authenticate();
    res.status(200).json({ message: "Connection has been established successfully." });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Unable to connect to the database", detail: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
