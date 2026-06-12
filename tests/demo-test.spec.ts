import { expect, test } from "vitest";
import { setupCounter } from "../src/counter.ts";

test("my demo test", () => {
  expect(true).toBe(true);
});

test("setupCounter initialises the button text", () => {
  const button = document.createElement("button");
  setupCounter(button);
  expect(button.innerHTML).toBe("Count is 0");
});

test("setupCounter increments on click", () => {
  const button = document.createElement("button");
  setupCounter(button);
  button.click();
  expect(button.innerHTML).toBe("Count is 1");
});
