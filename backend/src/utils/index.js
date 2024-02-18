const delay = (timeInMs) => {
  return new Promise((resolve) => setTimeout(resolve, timeInMs));
};

const removeBlankEntries = (data) => {
  const parsed = {};
  for (const key of Object.keys(data)) {
    if (typeof data[key] === 'string') {
      parsed[key] = data[key] ? data[key].trim() : null;
    } else if (typeof data[key] !== 'undefined') {
      parsed[key] = data[key];
    }
  }
  return parsed;
};

module.exports = {
  delay,
  removeBlankEntries
};
