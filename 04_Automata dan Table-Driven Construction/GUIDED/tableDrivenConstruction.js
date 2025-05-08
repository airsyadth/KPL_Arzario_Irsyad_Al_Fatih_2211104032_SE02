// Direct Access
function getDaysPerMonth(month) {
  const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysPerMonth[month - 1] || "Invalid month";
}
console.log(getDaysPerMonth(2));
console.log(getDaysPerMonth(13));

// Stair-step Access
function getGradeByScore(studentScore) {
  const grades = ["A", "AB", "B", "BC", "C", "D", "E"];
  const rangeLimit = [80, 70, 65, 60, 50, 40, 0];

  for (let i = 0; i < rangeLimit.length; i++) {
    if (studentScore >= rangeLimit[i]) {
      return grades[i];
    }
  }
  return "E";
}
console.log(getGradeByScore(75));
console.log(getGradeByScore(45));