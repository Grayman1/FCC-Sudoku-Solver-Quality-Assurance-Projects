'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const {puzzleString, coordinate, value} = req.body;

  // Validate coordinate and value
      if (!puzzleString || !value || !coordinate) {
          return res.json({error: "Required field(s) missing"})
      }

      const row = coordinate.split('')[0];
      const column = coordinate.split('')[1];

      if (coordinate.length !== 2 || !/[a-i]/i.test(row) || !/[1-9]/i.test(column)
      ) {
        return res.json({error: 'Invalid coordinate'});
      }

      if (value < 1 || value > 9) {
          return res.json({error: "Invalid value"});
      }

      if (puzzleString.length != 81) {
        return res.json({error: 'Expected puzzle to be 81 characters long'});
      }

      if (/[^0-9.]/g.test(puzzleString)) {
        return res.json({error: 'Invalid characters in puzzle'});
      }

      // Check placement
      const conflicts = [];
      // validCol check
      const colCheck = solver.checkColPlacement(puzzleString, row, column, value);
      // validRow check
      const rowCheck = solver.checkRowPlacement(puzzleString, row, column, value);
      // validReg check
      const regionCheck = solver.checkRegionPlacement(puzzleString, row, column, value);

      if (!rowCheck.valid) conflicts.push('row');
      if (!colCheck.valid) conflicts.push('column');
      if (!regionCheck.valid) conflicts.push('region');

      if (conflicts.length >= 1) return res.json({valid: false, conflict: conflicts});
      return res.json({valid: true});
    });
    
  app.route('/api/solve')
    .post((req, res) => {
      const {puzzleString} = req.body;

      if (!puzzleString) {
        return res.json({error: 'Required field missing'})
      }

      if (puzzle.length != 81) {
        return res.json({error: 'Expected puzzle to be 81 characters long'});
      }

      if (/[^0-9.]/g.test(puzzleString)) {
        return res.json({error: 'Invalid characters in puzzle'})
      }

      let solvedString = solver.solve(puzzleString);
      if (!solvedString) {
        res.json({error: 'Puzzle cannot be solved'})
      }
      else {
        res.json({solution: solvedString})
      }

    });
};
``