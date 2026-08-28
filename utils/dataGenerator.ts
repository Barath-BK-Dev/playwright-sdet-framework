export function generateEmployee() {
  const timestamp = Date.now();

  return {
    firstName: `Test${timestamp}`,
    lastName: "Employee",
  };
}
