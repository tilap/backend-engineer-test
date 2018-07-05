/* global it, expect */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const computeAllSkillsDuration = require('./computeAllSkillsDuration');

const logger = console;

const DATASET_PATH = path.resolve(__dirname, '../test/datasets/');

// Load a dataset test file with "input" and "expected" entries
const loadTestFile = (filename) => {
  const fileContent = fs.readFileSync(filename);
  const json = JSON.parse(fileContent);
  assert(Object.prototype.hasOwnProperty.call(json, 'input'), 'missing input entry');
  assert(Object.prototype.hasOwnProperty.call(json, 'expected'), 'missing expected entry');
  return json;
};

// Load test data from datasets json files in folder DATASET_PATH
const datasets = fs.readdirSync(DATASET_PATH)
  .filter(filename => filename.endsWith('.json'))
  .map((filename) => {
    // Load file content as json
    try {
      const json = loadTestFile(path.resolve(DATASET_PATH, filename));
      return [filename, json];
    } catch (error) {
      logger.error('Error while loading dataset', { filename, error: error.message });
      return null;
    }
  })
  .filter(v => !!v);

// Process each dataset test file
datasets.forEach(([filename, { input, expected }]) => {
  it(`should compute dataset ${filename}`, () => {
    const result = computeAllSkillsDuration(input);
    expect(result).toEqual(expected);
  });
});
