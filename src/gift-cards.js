const cards = new Map();

export function issueGiftCard(code, amount) {
  cards.set(code, amount);
  return { code, balance: amount };
}

export function redeemGiftCard(code, total) {
  const balance = cards.get(code) ?? 0;
  const used = Math.min(balance, total);
  cards.set(code, balance - used);
  return { remaining: total - used, balance: balance - used };
}
