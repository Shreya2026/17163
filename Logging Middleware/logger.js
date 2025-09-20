import { LOG_API_URL } from "./config.js";
import { validateLogInput } from "./validator.js";

export async function log(stack, level, pkg, message) {
  try {
    // Validate input
    validateLogInput(stack, level, pkg, message);

    // Make API call
    const response = await fetch(LOG_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Log created:", data);
    return data; // { logId, message }
  } catch (err) {
    console.error("Logging failed:", err.message);
    return null;
  }
}
