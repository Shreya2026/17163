// LoggingMiddleware/config.js
export const LOG_API_URL = "http://20.244.56.144/evaluation-service/logs"; 

// Allowed values (lowercase only)
export const STACKS = ["backend", "frontend"];
export const LEVELS = ["debug", "info", "warn", "error", "fatal"];
export const PACKAGES = [
  // backend
  "cache", "controller", "cronjob", "db", "domain",
  "handler", "repository", "route", "service",
  // frontend
  "api", "component", "hook", "page", "state", "style",
  // common
  "auth", "config", "middleware", "utils"
];
