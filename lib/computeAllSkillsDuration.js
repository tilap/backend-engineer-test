const assertInputFormat = require('./assertInputFormat');

module.exports = (entry) => {
  // Check format
  try {
    assertInputFormat(entry);
  } catch (error) {
    throw new Error(`Invalid input format: ${error.message}`);
  }

  return {
    freelance: {
      id: entry.freelance.id,
      computedSkills: [],
    },
  };
};
