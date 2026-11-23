export function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function cartCount(items) {
  return items.reduce((count, item) => count + item.quantity, 0);
}
