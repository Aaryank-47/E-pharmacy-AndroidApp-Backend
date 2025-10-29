import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

export const redis = createClient({
  url: process.env.REDIS_URL,
  socket: {
    reconnectStrategy: (retries) => Math.min(retries * 50, 2000),
  },
});

redis.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("end", () => {
  console.warn("Redis connection closed, retrying...");
});

(async () => {
  try {
    await redis.connect();
  } catch (err) {
    console.error("Failed to connect to Redis:", err);
  }
})();
