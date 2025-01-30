import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: `.env.development` });

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
