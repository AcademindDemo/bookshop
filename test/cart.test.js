import { test } from "node:test";
import assert from "node:assert/strict";
import { cartCount, cartTotal } from "../src/cart.js";

test("adds up the cart", () => {
  assert.equal(
    cartTotal([
      { price: 12, quantity: 2 },
      { price: 8, quantity: 1 },
    ]),
    32,
  );
});

test("counts every copy of every book in the cart", () => {
  assert.equal(
    cartCount([
      { price: 12, quantity: 2 },
      { price: 8, quantity: 1 },
    ]),
    3,
  );
});

test("counts an empty cart as zero", () => {
  assert.equal(cartCount([]), 0);
});
