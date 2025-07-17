export const authenticate = async (email, password) => {
  // Hardcoded for simplicity
  return email === "admin@food.com" && password === "admin123";
};
