import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns API key when correct Authorization header is present", () => {
    const headers = {
      authorization: "ApiKey my-secret-api-key",
    };
    expect(getAPIKey(headers)).toBe("my-secret-api-key");
  });

  test("returns null if Authorization header is missing", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if Authorization header is malformed", () => {
    const headers = {
      authorization: "Bearer my-token",
    };
    expect(getAPIKey(headers)).toBeNull();
  });
});