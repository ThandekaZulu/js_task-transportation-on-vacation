/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const RENT_COST = 40;
  const DAYS = 3;

  if (DAYS >= 3) {
    return RENT_COST * DAYS - 20;
  } else if (DAYS >= 7) {
    return RENT_COST * DAYS - 50;
  }
}

module.exports = calculateRentalCost;
