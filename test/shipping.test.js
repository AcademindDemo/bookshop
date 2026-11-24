import { test } from "node:test";
import assert from "node:assert/strict";
import { orderTotal } from "../src/cart.js";

test("charges 4.90 shipping on an order under 50 euros", () => {
  assert.equal(orderTotal([{ price: 12, quantity: 2 }]), 28.9);
});

test("ships free on an order over 50 euros", () => {
  assert.equal(orderTotal([{ price: 30, quantity: 2 }]), 60);
});
