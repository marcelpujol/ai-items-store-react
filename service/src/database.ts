import dotenv from "dotenv";
import { Pool } from "pg";
import { getConnectionString } from "./utils/dbUtils";

dotenv.config({ path: `.env.development` });

const dbPool: Pool = new Pool({
  connectionString: getConnectionString(),
});

export default dbPool;
