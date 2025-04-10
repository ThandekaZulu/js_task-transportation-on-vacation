/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;

  if (days >= 7) {
    return RENT_COST * days - 50;
  } else if (days >= 3) {
    return RENT_COST * days - 20;
  } else {
    return RENT_COST * days;
  }
}

module.exports = calculateRentalCost;
