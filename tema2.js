// Function that takes 2 paramiters (values)
function isSmallerOrGreater(first, second) {
  // If block compares if the first value is smaller the second
  if (first < second) {
    // If the first value is less then second then return -1
    return -1;
  } if (first === second) {
    // If the values are equal the return 0
    return 0;
  } else {
    // If non above is true the return 1;
    return 1;
  }
}