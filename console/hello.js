// Fetch name from command argument, environment, or fallback
const nameArg =
  process.argv[2] || process.env.USER || process.env.USERNAME || "world";

console.log(`Hello, ${nameArg}`);
