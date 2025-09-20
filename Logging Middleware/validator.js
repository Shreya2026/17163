// LoggingMiddleware/validator.js
import { STACKS, LEVELS, PACKAGES } from "./config.js";

export function validateLogInput(stack, level, pkg, message) {
  if (!STACKS.includes(stack))
    throw new Error(`Invalid stack: ${stack}`);
  if (!LEVELS.includes(level))
    throw new Error(`Invalid level: ${level}`);
  if (!PACKAGES.includes(pkg))
    throw new Error(`Invalid package: ${pkg}`);
  if (typeof message !== "string" || !message.trim())
    throw new Error("Message must be a non-empty string");
}
