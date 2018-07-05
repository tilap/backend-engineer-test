const assertInputFormat = require('./assertInputFormat');
const mergeFirstOverlapingPeriod = require('./mergeFirstOverlapingPeriod');

module.exports = (entry) => {
  // Check format
  try {
    assertInputFormat(entry);
  } catch (error) {
    throw new Error(`Invalid input format: ${error.message}`);
  }

  const { freelance: { id: freelanceId, professionalExperiences } } = entry;

  // Reduce experiences to a skill map and keep only usefull data
  const freelanceSkillsPeriods = professionalExperiences.reduce((skillsMap, skill) => {
    const { startDate, endDate, skills } = skill;
    skills.forEach(({ id: skillId, name }) => {
      if (!skillsMap.has(skillId)) {
        skillsMap.set(skillId, {
          id: skillId,
          name,
          periods: [],
        });
      }

      skillsMap.get(skillId).periods.push({ startDate, endDate });
    });
    return skillsMap;
  }, new Map());

  // For each skills, reduce periods to durationInMonths
  const computedSkills = Array.from(freelanceSkillsPeriods.values()).map((skill) => {
    const { id, name, periods } = skill;
    let localPeriods = periods;

    // Merge periods
    while (localPeriods.length !== mergeFirstOverlapingPeriod(localPeriods).length) {
      localPeriods = mergeFirstOverlapingPeriod(localPeriods);
    }

    return { id, name, durationInMonths: 0 };
  });

  return {
    freelance: {
      id: freelanceId,
      computedSkills,
    },
  };
};
