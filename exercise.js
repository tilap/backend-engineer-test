const fs = require('fs');
const computeAllSkillsDuration = require('./lib/computeAllSkillsDuration');

const freelancerFile = './exercise/freelancer.json';

if (!fs.existsSync(freelancerFile)) {
  console.log('File does not exists');
}

let freelancer = fs.readFileSync(freelancerFile, 'utf8');

freelancer = JSON.parse(freelancer);


try {
  // compute all skills duration
  const result = computeAllSkillsDuration(freelancer);

  // output result
  console.log(result);
} catch (error) {
  // Noop as requested
  if (process.env.SHOW_DEBUG) {
    console.log('Error', error.message);
  }
  process.exit(1);
}
