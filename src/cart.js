export const SHIPPING_COST = 4.9;
export const FREE_SHIPPING_FROM = 50;

export function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function shippingCost(items) {
  return cartTotal(items) >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST;
}

export function orderTotal(items) {
  const cents =
    Math.round(cartTotal(items) * 100) + Math.round(shippingCost(items) * 100);
  return cents / 100;
}
