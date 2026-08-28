import { env } from "../config/env";

export const users = {
  admin: { username: env.username, password: env.password },
};
