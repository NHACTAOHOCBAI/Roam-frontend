import { describe, expect, it } from "vitest";
import { apiClient } from "./client";

describe("apiClient", () => {
  it("uses the local API namespace by default", () => {
    expect(apiClient.defaults.baseURL).toBe("/api");
    expect(apiClient.defaults.timeout).toBe(10_000);
  });
});
