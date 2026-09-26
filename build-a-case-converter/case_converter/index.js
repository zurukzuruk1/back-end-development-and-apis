function getUpperCase(str) {
  return str.toUpperCase();
}
function getLowerCase(str) {
  return str.toLowerCase();
}
function getSentenceCase(str) {
  const lowerStr = getLowerCase(str);
  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
}
function getProperCase(str) {
  const properCaseArr = str.split(" ").map((word) => getSentenceCase(word));
  return properCaseArr.join(" ");
}
module.exports = {
  getProperCase,
  getLowerCase,
  getUpperCase,
  getSentenceCase,
};
