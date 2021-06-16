const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');
const { puzzlesAndSolutions } = require('../controllers/puzzle-strings');

chai.use(chaiHttp);

let validPuzzle = puzzlesAndSolutions[1][0];

suite('Functional Tests', () => {


 
//Functional Test #1-Solve a puzzle with valid puzzle string: POST request to /api/solve
  test('#1-Solve a puzzle with valid puzzle string: POST request to /api/solve', (done) => {
   chai.request(server)
    .post('/api/solve')
    .send({puzzle: validPuzzle})
    .end((err, res) => {        
      assert.equal(res.status, 200);
      let solvedPuzzle = puzzlesAndSolutions[1][1];
      assert.equal(res.body.solution, solvedPuzzle);
      
      done();
    })

  })



//Functional Test #2-Solve a puzzle with missing puzzle string: POST request to /api/solve
/*
  test('', (done) => {

    
  })
*/



//Functional Test #3-Solve a puzzle with invalid characters: POST request to /api/solve
/*
  test('', (done) => {

    
  })
*/


//Functional Test #4-Solve a puzzle with incorrect length: POST request to /api/solve
/*
  test('', (done) => {

    
  })
*/


//Functional Test #5-Solve a puzzle that cannot be solved: POST request to /api/solve
/*
  test('', (done) => {

    
  })
*/

//Functional Test #6-Check a puzzle placement with all fields: POST request to /api/check
/*
  test('', (done) => {

    
  })
*/

//Functional Test #7-Check a puzzle placement with single placement conflict: POST request to /api/check
/*
  test('', (done) => {

    
  })
*/

//Functional Test #8-Check a puzzle placement with multiple placement conflicts: POST request to /api/check
/*
  test('', (done) => {

    
  })
*/

//Functional Test #9-Check a puzzle placement with all placement conflicts: POST request to /api/check
/*
  test('', (done) => {

    
  })
*/

//Functional Test #10-Check a puzzle placement with missing required fields: POST request to /api/check

//Functional Test #11-Check a puzzle placement with invalid characters: POST request to /api/check
/*
  test('', (done) => {

      
    })
*/
//Functional Test #12-Check a puzzle placement with incorrect length: POST request to api/check.
/*
  test('', (done) => {

    
  })
*/


//Functional Test #13-Check a puzzle placement with invalid placement coordinate: POST request to /api/check
/*
  test('', (done) => {

    
  })
*/
//Functional Test #14-Check a puzzle placement with invalid placement value: POST request to /api/check
/*
  test('', (done) => {

    
  })
*/






});

