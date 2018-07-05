# NOTES

So here is my code to answer your exercice.

## Run

Script commands

- `npm run lint`: code linting with fix
- `npm run test`: test feature with jest

You can add the env var `SHOW_DEBUG`to see the error instead of exiting roughly:

```
SHOW_DEBUG=1 node exercise
```

## How I worked

### I did a sumup of features inputs:

1. Overlapping months of experience with the same skill(s) should not be counted twice, see assets/months-overlap.png
2. All professional experiences startDate and endDate values will be on the first day of the month.
3. You script will be executed like this : node exercise.js
4. We're using node 8.4 for the execution
5. You can use any npm package you want
6. If there's an error in the json file, exit without printing anything
7. The duration in months should be rounded

Extra interview note:

8. any starting month is a full month
9. jest is the Comet testing tool

NB: rule #7 does not really makes senses against rules #2 + #8

### I draw the main part of my lib anatomy

- a main function will do the global stuff and throw error if any
  - [ ] will check the required input format so I won't care anymore later
  - [ ] will extract and format the input to skill/periods
  - [ ] will process the periods to merge the overlapping ones`
  - [ ] will compute duration for each skill
  - [ ] will output the result with input freelance data

### I defined main coding steps

- Switch to expected node version on dev env
- Add some dev tools:
  - eslint to get clean coding style
  - jest, good place to do it bacause it is a lib, core business feature, api input depending
- dev from up to bottom, with tests (tdd style)

- put comment in code
- skip any doc

## Notes

- https://www.geeksforgeeks.org/merging-intervals/ : the tip, to sort by starting date to be more efficient
- I found some relative `moment` libs for duration ([moment-period](https://www.npmjs.com/package/moment-period)) but found it to heavy for that piece of code
