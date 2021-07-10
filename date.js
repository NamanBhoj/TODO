module.exports = getDate;

function getDate() {
  const date = new Date();

  currentDate = date.toLocaleDateString("en-US");

  return currentDate;
}
