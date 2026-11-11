import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal } from "../src/cart.js";

test("adds up the cart", () => {
  assert.equal(
    cartTotal([
      { price: 12, quantity: 2 },
      { price: 8, quantity: 1 },
    ]),
    32,
  );
});
