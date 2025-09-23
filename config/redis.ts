import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });


export const redis = createClient({
  url: process.env.REDIS_URL, 
});

redis.on("error", (err) => {
  console.error("❌ Redis Client Error:", err);
  process.exit(1);
});

(async () => {
  try {
    await redis.connect();
    console.log("✅ Connected to Redis");
  } catch (err) {
    console.error("❌ Failed to connect to Redis:", err);
  }
})();
