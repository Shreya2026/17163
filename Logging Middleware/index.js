// LoggingMiddleware/index.js
import { log } from "./logger.js";

// Express middleware example
export function loggingMiddleware(req, res, next) {
  // Logs every request (optional)
  log("backend", "info", "middleware", `${req.method} ${req.url}`);
  next();
}

// Utility to log application-specific errors
export function logAppError(pkg, message) {
  return log("backend", "error", pkg, message);
}

// Utility to log fatal DB errors
export function logDbFatal(message) {
  return log("backend", "fatal", "db", message);
}
