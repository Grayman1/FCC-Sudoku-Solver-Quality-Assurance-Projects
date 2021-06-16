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
    test('#2 - Logic handles a puzzle string with invalid characters (not 1-9 or .)' , (done) => {
      let invalidPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..1j....926914.37.';
      assert.equal(solver.solve(invalidPuzzle), false);
      done();
    });

// Unit Test #3-Logic handles a puzzle string that is not 81 characters in length
    test('#3-Logic handles a puzzle string that is not 81 characters in length', (done) => {

      let invalidPuzzle = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1.16....926914.37.';
      assert.equal(solver.solve(invalidPuzzle), false);
      done();

    });

  });

  suite('check placement', () => {

  // Unit Test #4-Logic handles a valid row placement
    test('#4-Logic handles a valid row placement', (done) => {
      let validPuzzle = puzzlesAndSolutions[0][0];
      assert.equal(solver.checkRowPlacement(validPuzzle, 'A', '2', 9), true);
      done();
    });


  // Unit Test #5-Logic handles an invalid row placement
    test('#5-Logic handles an invalid row placement', (done) => {
      let validPuzzle = puzzlesAndSolutions[0][1];
      assert.equal(solver.checkRowPlacement(validPuzzle, 'A', '2', 1), false);
      done();
    });
   
  // Unit Test #6-Logic handles a valid column placement
  
    test('#6-Logic handles a valid column placement', (done) => {
      let validPuzzle = puzzlesAndSolutions[0][0];
      assert.equal(solver.checkColPlacement(validPuzzle, 'A', '2', 8), true);
      done();      
    });
    
  // Unit Test #7-Logic handles an invalid column placement
  
    test('#7-Logic handles an invalid column placement', (done) => {
      let validPuzzle = puzzlesAndSolutions[0][0];
      assert.equal(solver.checkColPlacement(validPuzzle, 'A', '2', 9), false);
      done();  
      
    })
    
  // Unit Test #8-Logic handles a valid region (3x3 grid) placement
  
    test('#8-Logic handles a valid region (3x3 grid) placement', (done) => {

    //  Test 8A - Passes
      const output = solver.checkRegionPlacement(puzzlesAndSolutions[0][0], 'I', '7', 3);
      assert.equal(output, true);
    //  assert.isTrue(output.valid);    
 
    // Test 8B
      const output2 = solver.checkRegionPlacement(puzzlesAndSolutions[0][0], 'A', '2', 3);
      assert.equal(output2, true);
    //  assert.isTrue(output.valid);

      // Test 8C
      const output3 = solver.checkRegionPlacement(puzzlesAndSolutions[0][0], 'C', '3', 7);
      assert.equal(output3, true);
      // Test 8D
      const output4 = solver.checkRegionPlacement(puzzlesAndSolutions[0][0], 'F', '6', 4);
      assert.equal(output4, true);
    //  assert.isTrue(output.valid);
      done();
    })
    
  // Unit Test #9-Logic handles an invalid region (3x3 grid) placement
  /*
      test('', (done) => {

      
    })
    */
  });

  suite('solving tests', ()=> {

// Unit Test #10-Valid puzzle strings pass the solver
/*
    test('', (done) => {

      
    })
    */
// Unit Test #11-Invalid puzzle strings fail the solver
/*
    test('', (done) => {

      
    })
    */
// Unit Test #12-Solver returns the the expected solution for an incomplete puzzle
/*
    test('', (done) => {

      
    })
    */
  });

});
