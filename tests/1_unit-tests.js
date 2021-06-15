const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver();

const { puzzlesAndSolutions } = require('../controllers/puzzle-strings');

suite('UnitTests', () => {
  suite('Puzzle String tests', () => {
// Unit Test #1-Logic handles a valid puzzle string of 81 characters
    test('#1 - Valid Puzzle string of 81 characters', (done) => {
      let validPuzzle = puzzlesAndSolutions[0][0];
      let completePuzzle = puzzlesAndSolutions[0][1];
      assert.equal(solver.solve(validPuzzle), completePuzzle);
      done();

  })



// Unit Test #2-Logic handles a puzzle string with invalid characters (not 1-9 or .)

// Unit Test #3-Logic handles a puzzle string that is not 81 characters in length






  });

  suite('check placement', () => {

  // Unit Test #4-Logic handles a valid row placement

  // Unit Test #5-Logic handles an invalid row placement

  // Unit Test #6-Logic handles a valid column placement

  // Unit Test #7-Logic handles an invalid column placement

  // Unit Test #8-Logic handles a valid region (3x3 grid) placement

  // Unit Test #9-Logic handles an invalid region (3x3 grid) placement
  });

  suite('solving tests', ()=> {

// Unit Test #10-Valid puzzle strings pass the solver

// Unit Test #11-Invalid puzzle strings fail the solver

// Unit Test #12-Solver returns the the expected solution for an incomplete puzzle

  });

});
