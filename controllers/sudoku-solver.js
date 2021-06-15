  
class SudokuSolver {

  validate(puzzleString) {
    if (!puzzleString)
      return {valid : false, error: "Required field missing"};
    else if (puzzleString.length != 81)
      return {valid: false , error: 'Expected puzzle to be 81 characters long' };
    else if (/[^\d\.]/.test(puzzleString))
      return { valid : false, error: 'Invalid characters in puzzle' };
    else
      return { success: 'Validation completed' };
  }

  checkRowPlacement(puzzleString, row, column, value) {
    // Creating substring of row
    const rowString = puzzleString.slice(row * 9, (row + 1) * 9);
    for (let i in rowString)
      if (rowString[i] == value && i != column)
        return false;
    return true;
  }


  checkColPlacement(puzzleString, row, column, value) {
    for (let i = 0; i < 9; i++)
      if (puzzleString[9 * i + column] == value && i != row)
        return false;
    return true;

  }

  checkRegionPlacement(puzzleString, row, column, value) {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) {
        // Creating index for tile of region
        let currentIndex = 9 * (3 * Math.floor(row / 3) + i) + (3 * Math.floor(column / 3) + j);
        if (puzzleString[currentIndex] == value && (row % 3 != i || column % 3 != j))
          return false;
      }
    return true;

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;