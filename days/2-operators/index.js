function solve(meal_cost, tip_percent, tax_percent) {
  const tip = meal_cost * (tip_percent / 100);
  const tax = meal_cost * (tax_percent / 100);
  console.log(Math.round(tip + tax + meal_cost));
}

module.exports = solve;
