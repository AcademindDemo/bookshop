import { test } from "node:test";
import assert from "node:assert/strict";
import { issueGiftCard, redeemGiftCard } from "../src/gift-cards.js";

test("a gift card pays part of the total", () => {
  issueGiftCard("GIFT-20", 20);
  assert.deepEqual(redeemGiftCard("GIFT-20", 32), { remaining: 12, balance: 0 });
});

test("a gift card keeps what the order didn't use", () => {
  issueGiftCard("GIFT-50", 50);
  assert.deepEqual(redeemGiftCard("GIFT-50", 32), { remaining: 0, balance: 18 });
});
