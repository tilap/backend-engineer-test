/**
 * Minimal input validation
 * Can be enhance with isostring match, or against valid values from api/database
 * No coherence check (ie: many skills with main ID) as we rely on our self api
 */
const assert = require('assert');

module.exports = (entry) => {
  const { freelance } = entry;
  assert(typeof freelance === 'object', 'expect a freelance entry');

  const { id, professionalExperiences } = freelance;
  assert(
    typeof id === 'number' && `${id}`.match(/^\d+$/),
    'expect id to be a positive integer',
  );
  assert(
    typeof professionalExperiences === 'object' && professionalExperiences.constructor === Array,
    'expect professionalExperiences to be an array',
  );

  professionalExperiences.forEach((professionalExperience) => {
    assert(
      typeof professionalExperience === 'object',
      'expect professionalExperience to be an object',
    );

    const {
      id: professionalExperienceId,
      startDate,
      endDate,
      skills,
    } = professionalExperience;

    assert(
      typeof professionalExperienceId === 'number' && `${id}`.match(/^\d+$/),
      'expect professional experience id to be a positivs integer',
    );

    assert(
      typeof skills === 'object' && skills.constructor === Array,
      'expect skills to be an array',
    );

    assert(typeof startDate === 'string', 'expect startDate to be a string');
    assert(typeof endDate === 'string', 'expect endDate to be a string');


    skills.forEach(({ id: skillId, name }) => {
      assert(
        typeof skillId === 'number' && `${skillId}`.match(/^\d+$/),
        'expect skill id to be an positive integer',
      );

      assert(typeof name === 'string', 'expect skill name to be a string');
    });
  });

  return true;
};
