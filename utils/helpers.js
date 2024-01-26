function truncateLabel(label, maxLength) {
  if (label.length > maxLength) {
    return label.slice(0, maxLength - 3) + "...";
  }
  return label;
}

function removeNonDigits(input) {
  return input.replace(/\D/g, "");
}

function getRandomElement(array) {
  if (array.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function mapCategoryToDepartment(category) {
  const categoryMap = {
    1: "ฝ่ายไอที",
    2: "ฝ่ายสื่อ",
    3: "ฝ่ายอาคาร",
  };

  const categories = category.split(",").map((cat) => cat.trim());
  const departments = categories.map((cat) => categoryMap[cat] || cat);

  return departments.join(", ");
}

function extractContentWithinParentheses(buildName) {
  const matchResult = buildName.match(/\(([^)]+)\)/);

  // If parentheses are found, extract the content within them
  if (matchResult) {
    const contentWithinParentheses = matchResult[1];
    return contentWithinParentheses;
  }

  // If no parentheses are found, return the original string
  return buildName;
}

function extractCharactersAndNumbers(input) {
  const result = input.match(/[A-Za-z]{2}\d+/);

  if (result) {
    return result[0];
  } else {
    return null; // or handle as needed
  }
}

function isBusinessHour(start, end) {
  const now = new Date();
  const currentHour = now.getHours();

  // Default Business hours: 9:00 to 17:00
  const businessStartHour = start ?? 9;
  const businessEndHour = end ?? 17;

  return currentHour >= businessStartHour && currentHour < businessEndHour;
}

function mapCategoryById(categoryId, categories) {
  const category = categories.find((c) => c.ctg_no === categoryId);
  return category ? category.ctg_name : "อื่น ๆ";
}

function mapStatusById(statusId, status) {
  const repairStatus = status.find((s) => s.status_id == statusId);
  return {
    name: repairStatus ? repairStatus.status_meaning : "ไม่ทราบสถานะ",
    color: repairStatus ? repairStatus.status_color : "#1388EE",
  };
}

function formatDateToString(dateString) {
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date)) {
    return "วันที่ไม่ถูกต้อง";
  }

  // Format the date to a desired string representation
  const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");

  return formattedDate;
}

module.exports = {
  truncateLabel,
  removeNonDigits,
  mapCategoryToDepartment,
  mapCategoryById,
  mapStatusById,
  getRandomElement,
  extractContentWithinParentheses,
  extractCharactersAndNumbers,
  isBusinessHour,
  formatDateToString,
};
