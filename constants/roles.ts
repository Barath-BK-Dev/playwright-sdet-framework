export const roles = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
} as const;

export type Role = (typeof roles)[keyof typeof roles];
