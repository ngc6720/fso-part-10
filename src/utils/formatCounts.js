export const formatCounts = (num) => {
  if (num >= 1000) {
    return Math.floor(parseInt(num) / 100) / 10 + "k";
  }
  return parseInt(num).toString();
};
