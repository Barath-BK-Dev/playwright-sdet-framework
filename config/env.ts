import dotenv from "dotenv";

dotenv.config();

function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing env variable: ${name}`);
  }
  return value;
}

export const env = {
  baseURL: getEnv("BASE_URL"),
  username: getEnv("ORANGEHRM_USERNAME"),
  password: getEnv("ORANGEHRM_PASSWORD"),
};
